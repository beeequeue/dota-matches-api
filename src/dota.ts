import { mande, MandeError } from "mande"
import ms from "ms"
import { HTMLElement, parse } from "node-html-parser"
import PQueue from "p-queue"

import { arr2hex, sha1 } from "./crypto"
import {
  Db,
  getMatchDataFromDb,
  getTeamsFromDb,
  upsertMatchData,
  upsertTeamsData,
} from "./db"
import { MetaKey, seconds } from "./utils"

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

const liquipediaQueue = new PQueue({ intervalCap: 1, interval: 30_000 })
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

const withHash = async (match: Omit<Match, "hash">): Promise<Match> => {
  const hash = await sha1(
    new TextEncoder().encode(
      (match.startsAt?.toString() ?? "") +
        (match.teams[0]?.name ?? "") +
        (match.teams[1]?.name ?? ""),
    ),
  )

  return {
    hash: arr2hex(hash),
    ...match,
  }
}

const fetchMatches = async (country: string): Promise<Match[]> => {
  console.log("Fetching match data...")

  const data = await liquipediaQueue.add(() =>
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
  )

  if (data instanceof Error) {
    // eslint-disable-next-line unicorn/prefer-type-error
    throw new Error("Failed to fetch match data", { cause: data })
  }

  const root = parse(data.parse.text["*"])

  const $matches = root.querySelectorAll("[data-toggle-area-content='2'] > table")
  if ($matches.length === 0) return []

  return await Promise.all(
    $matches.map(async ($match) => {
      const teamLeft$ = $match.querySelector(".team-left")!
      const teamRight$ = $match.querySelector(".team-right")!
      const versus$ = $match.querySelector(".versus")!
      const meta$ = $match.querySelector(".timer-object")!
      const leagueLink$ = $match.querySelector(".league-icon-small-image > a")!

      const teams = [extractTeam(teamLeft$), extractTeam(teamRight$)] as Match["teams"]
      const matchType = versus$.querySelector("abbr")?.textContent
      const startTime = meta$.attrs["data-timestamp"]
      const streamName = meta$.attrs["data-stream-twitch"]
      const leagueName = leagueLink$.attrs["title"]
      const leagueUrl = leagueLink$.attrs["href"]

      return await withHash({
        teams,
        matchType: matchType ?? null,
        startsAt: startTime ? new Date(Number(startTime) * 1000).toISOString() : null,
        leagueName,
        leagueUrl: leagueUrl ? encodeURI(`https://liquipedia.net${leagueUrl}`) : null,
        streamUrl: streamName
          ? encodeURI(`https://liquipedia.net/dota2/Special:Stream/twitch/${streamName}`)
          : null,
      })
    }),
  )
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
      url: `https://liquipedia.net${el$.querySelector("a")!.attrs["href"]}`,
    }
  })

  return data.sort((a, b) => a.name!.localeCompare(b.name!))
}

const fetchAndCacheTeams = async (env: Env, db: Db, country: string): Promise<Team[]> => {
  console.log("Fetching teams...")

  const page = await liquipediaQueue.add(() =>
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
  )

  if (page instanceof Error) {
    // eslint-disable-next-line unicorn/prefer-type-error
    throw new Error("Failed to fetch match data", { cause: page })
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
  (env: Env, db: Db) =>
  async (country: string): Promise<string[]> => {
    const lastFetched = Number((await env.META.get(MetaKey.TEAMS_LAST_FETCHED)) ?? -1)
    console.log(`Teams were last fetched at ${lastFetched}`)
    if (lastFetched !== -1) {
      if (lastFetched > Date.now() + ms("3h")) {
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

const getMatches =
  (env: Env, db: Db) =>
  async (country: string): Promise<Match[]> => {
    console.log(`Getting match data...`)

    if ((await env.META.get(MetaKey.MATCHES_FRESH)) === "true") {
      return getMatchDataFromDb(db)
    }

    const matches = await fetchMatches(country)

    await upsertMatchData(db, matches)
    await env.META.put(MetaKey.MATCHES_FRESH, "true", { expirationTtl: seconds("60s") })

    return matches
  }

export const createDotaClient = (env: Env, db: Db) => ({
  getMatches: getMatches(env, db),
  getTeams: getTeams(env, db),
})
