import { DrizzleD1Database } from "drizzle-orm/d1"
import { mande, MandeError } from "mande"
import ms from "ms"
import { nanoid } from "nanoid/non-secure"
import { HTMLElement, parse } from "node-html-parser"
import PQueue from "p-queue"

import {
  getMatchDataFromDb,
  getTeamsFromDb,
  upsertMatchData,
  upsertTeamsData,
} from "./db"
import { EDGE_CACHE_TIMEOUT, MetaKey, seconds } from "./utils"

export type Team = {
  name: string | null
  url: string | null
}

export type Match = {
  hash: string
  teams: [Team | null, Team | null]
  matchType: string | null
  startsAt: string | null
  leagueName: string | null
  leagueUrl: string | null
  streamUrl: string | null
}

const liquipediaQueue = new PQueue({
  intervalCap: 1,
  interval: import.meta.env.MODE === "test" ? 0 : 30_000,
})
const liquipediaClient = mande("https://liquipedia.net/dota2", {
  responseAs: "json",
  query: {
    format: "json",
  },
  headers: {
    "Accept-Encoding": "gzip",
  },
})

export type LiquipediaBody = {
  parse: {
    title: string
    pageid: number
    revid: number
    text: {
      ["*"]: string
    }
    langlinks: string[]
    categories: unknown[]
    links: unknown[]
    templates: unknown[]
    images: string[]
    externallinks: string[]
  }
}

const extractTeam = (team$: HTMLElement): Team => {
  const name = team$
    .querySelector(".team-template-text > a")
    ?.attrs?.title?.replace(/\(.*?\)/g, "")
    ?.trim()
  const urlPath = team$.querySelector("[href^='/dota2/']")?.attrs?.href

  return {
    name: name ?? null,
    url: urlPath ? `https://liquipedia.net${urlPath}` : null,
  }
}

const withHash = (match: Omit<Match, "hash">): Match => ({
  hash: nanoid(8),
  ...match,
})

const fetchMatches = async (country: string): Promise<Match[]> => {
  console.log("Fetching match data...")

  const data = await liquipediaQueue.add(
    () =>
      liquipediaClient
        .get<LiquipediaBody>("/api.php", {
          headers: {
            "User-Agent": `dota-matches-api-${country}/${GIT_SHA}`,
          },
          query: {
            action: "parse",
            page: "Liquipedia:Upcoming_and_ongoing_matches",
          },
        })
        .catch((error: MandeError) => error),
    { throwOnTimeout: true },
  )

  if (data instanceof Error) {
    // eslint-disable-next-line unicorn/prefer-type-error
    throw new Error("Failed to fetch match data", { cause: data })
  }

  const root = parse(data.parse.text["*"])

  const $matches = root.querySelectorAll("[data-toggle-area-content='2'] > table")
  if ($matches.length === 0) return []

  const matches = $matches.map(($match) => {
    const teamLeft$ = $match.querySelector(".team-left")!
    const teamRight$ = $match.querySelector(".team-right")!
    const versus$ = $match.querySelector(".versus")!
    const meta$ = $match.querySelector(".timer-object")!
    const leagueLink$ = $match.querySelector(".league-icon-small-image > a")!

    const teams = [extractTeam(teamLeft$), extractTeam(teamRight$)] as Match["teams"]
    // For some reason we have to use `innerHTML` here instead of `textContent`
    // because the abbr tag might not be parsed correctly by node-html-parser?
    const matchType = versus$.querySelector("abbr")?.innerHTML
    const startTime = meta$.attrs["data-timestamp"]
    const streamName = meta$.attrs["data-stream-twitch"]
    const leagueName = leagueLink$.attrs.title
    const leagueUrl = leagueLink$.attrs.href

    return withHash({
      teams,
      matchType: matchType ?? null,
      startsAt: startTime ? new Date(Number(startTime) * 1000).toISOString() : null,
      leagueName,
      leagueUrl: leagueUrl ? encodeURI(`https://liquipedia.net${leagueUrl}`) : null,
      streamUrl: streamName
        ? encodeURI(`https://liquipedia.net/dota2/Special:Stream/twitch/${streamName}`)
        : null,
    })
  })

  // Orders by start time, but puts matches with no start time at the end
  return matches.sort((a, b) => {
    if (a.startsAt == null) return 1
    if (b.startsAt == null) return -1

    return a.startsAt.localeCompare(b.startsAt)
  })
}

export const parseTeamsPage = (html: string): Team[] => {
  const root = parse(html)

  const notableTeamsContainer$ = root.querySelector(
    "h2:has(#Notable_Active_Teams) + div",
  )!
  const notableTeams$ = notableTeamsContainer$.querySelectorAll(".team-template-text")
  const data: Team[] = notableTeams$?.map((el$) => {
    return {
      name: el$.textContent.trim(),
      url: `https://liquipedia.net${el$.querySelector("a")!.attrs.href}`,
    }
  })

  return data.sort((a, b) => a.name!.localeCompare(b.name!))
}

const fetchAndCacheTeams = async (
  env: Env,
  db: DrizzleD1Database,
  country: string,
): Promise<Team[]> => {
  console.log("Fetching teams...")

  const page = await liquipediaQueue.add(
    () =>
      liquipediaClient
        .get<LiquipediaBody>("/api.php", {
          headers: {
            "User-Agent": `dota-matches-api-${country}/${GIT_SHA}`,
          },
          query: {
            action: "parse",
            page: "Portal:Teams",
          },
        })
        .catch((error: MandeError) => error),
    { throwOnTimeout: true },
  )

  console.log("Fetched teams!")
  if (page instanceof Error) {
    // eslint-disable-next-line unicorn/prefer-type-error
    throw new Error("Failed to fetch team data", { cause: page })
  }

  const teams = parseTeamsPage(page.parse.text["*"])
  if (teams.length === 0) return []

  await upsertTeamsData(db, teams)
  await env.META.put(MetaKey.TEAMS_LAST_FETCHED, Date.now().toString(), {
    expirationTtl: seconds("30d"),
  })

  return teams
}

export const getTeams =
  (env: Env, db: DrizzleD1Database) =>
  async (country: string): Promise<string[]> => {
    const lastFetched = Number((await env.META.get(MetaKey.TEAMS_LAST_FETCHED)) ?? -1)
    console.log(`Teams were last fetched at ${lastFetched}`)
    if (lastFetched !== -1) {
      if (Date.now() > lastFetched + ms("12h")) {
        console.log(`Teams are stale, refreshing...`)
        void fetchAndCacheTeams(env, db, country)
      }

      console.log(`Retrieving teams from DB...`)
      const teams = await getTeamsFromDb(db)
      return teams.map(({ name }) => name!)
    }

    console.log(`Fetching teams from Liquipedia...`)
    const teams = await fetchAndCacheTeams(env, db, country)
    return teams.map(({ name }) => name!)
  }

const getMatches = (env: Env, db: DrizzleD1Database) => async (country: string) => {
  console.log(`Getting match data...`)

  let lastFetched = Number((await env.META.get(MetaKey.MATCHES_LAST_FETCHED)) ?? -1)
  if (lastFetched !== -1) {
    return { lastFetched: Number(lastFetched), matches: await getMatchDataFromDb(db) }
  }

  const matches = await fetchMatches(country)

  await upsertMatchData(db, matches)

  lastFetched = Date.now()
  await env.META.put(MetaKey.MATCHES_LAST_FETCHED, lastFetched.toString(), {
    expirationTtl: EDGE_CACHE_TIMEOUT,
  })

  return { lastFetched, matches }
}

export const createDotaClient = (env: Env, db: DrizzleD1Database) => ({
  getMatches: getMatches(env, db),
  getTeams: getTeams(env, db),
})
