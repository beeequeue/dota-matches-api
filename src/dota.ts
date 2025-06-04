import { ms } from "milli"
import { nanoid } from "nanoid/non-secure"
import PQueue from "p-queue"
import { Temporal } from "temporal-polyfill"
import { type ElementNode, parse } from "ultrahtml"
import { querySelector, querySelectorAll } from "ultrahtml/selector"
import { isXiorError, Xior, type XiorError } from "xior"

import {
  getMatchDataFromDb,
  getTeamsFromDb,
  upsertMatchData,
  upsertTeamsData,
} from "./db.ts"
import {
  EDGE_CACHE_TIMEOUT,
  getNodeText,
  MetaKey,
  parseTeamsPage,
  seconds,
} from "./utils.ts"

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
  interval: process.env.NODE_ENV === "test" ? 0 : 30_000,
})
const liquipediaClient = new Xior({
  baseURL: "https://liquipedia.net/dota2",
  responseType: "json",
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

const extractTeam = (team$: ElementNode): Team => {
  if (getNodeText(team$).trim() === "TDB") {
    return {
      name: "TBD",
      url: null,
    }
  }

  const name = (
    querySelector(team$, ".team-template-text > a") as ElementNode
  )?.attributes?.title
    ?.replace(/\(.*?\)/g, "")
    ?.trim()
  const urlPath = (querySelector(team$, '[href^="/dota2/"]') as ElementNode)?.attributes
    ?.href

  return {
    name: name ?? null,
    url: urlPath != null ? `https://liquipedia.net${urlPath}` : null,
  }
}

const withHash = (match: Omit<Match, "hash">): Match => ({
  hash: nanoid(8),
  ...match,
})

const fetchMatches = async (country: string): Promise<Match[]> => {
  console.log("Fetching match data...")

  const response = await liquipediaQueue.add(
    async () =>
      liquipediaClient
        .get<LiquipediaBody>("/api.php", {
          headers: {
            "User-Agent": `dota-matches-api-${country}`,
          },
          params: {
            action: "parse",
            format: "json",
            contentmodel: "wikitext",
            text: "{{NewDota2_matches_upcoming|filterbuttons-liquipediatier=1,2|filterbuttons-liquipediatiertype=Monthly,Weekly,Qualifier,Misc,Showmatch,National}}",
          },
        })
        .catch((error: XiorError) => error),
    { throwOnTimeout: true },
  )

  if (isXiorError(response)) {
    throw new Error("Failed to fetch match data", { cause: response })
  }

  const root = parse(response.data.parse.text["*"]) as ElementNode

  const $matches = querySelectorAll(root, ".match")
  if ($matches.length === 0) return []

  const matches = $matches.map(($match) => {
    const teamLeft$ = querySelector($match, ".team-left") as ElementNode
    const teamRight$ = querySelector($match, ".team-right") as ElementNode
    const versus$ = querySelector($match, ".versus") as ElementNode
    const meta$ = querySelector($match, ".timer-object") as ElementNode
    const leagueLink$ = querySelector(
      $match,
      ".league-icon-small-image > a",
    ) as ElementNode
    const streamTitle$ = querySelector($match, ".match-streams a") as ElementNode

    const teams = [extractTeam(teamLeft$), extractTeam(teamRight$)] as Match["teams"]
    // For some reason we have to use `innerHTML` here instead of `textContent`
    // because the abbr tag might not be parsed correctly by node-html-parser?
    const matchType = getNodeText(querySelector(versus$, "abbr") as ElementNode)
    const startTime = meta$.attributes["data-timestamp"]
    const leagueName = leagueLink$.attributes.title
    const leagueUrl = leagueLink$.attributes.href
    const streamUrl = streamTitle$?.attributes?.href

    return withHash({
      teams,
      matchType: matchType ?? null,
      startsAt: startTime
        ? Temporal.Instant.fromEpochMilliseconds(Number(startTime) * 1000).toString()
        : null,
      leagueName,
      leagueUrl: leagueUrl ? encodeURI(`https://liquipedia.net${leagueUrl}`) : null,
      streamUrl:
        streamUrl != null ? encodeURI(`https://liquipedia.net${streamUrl}`) : null,
    })
  })

  // Orders by start time, but puts matches with no start time at the end
  return matches.sort((a, b) => {
    if (a.startsAt == null) return 1
    if (b.startsAt == null) return -1

    return a.startsAt.localeCompare(b.startsAt)
  })
}

const fetchAndCacheTeams = async (env: Env, country: string): Promise<Team[]> => {
  console.log("Fetching teams...")

  const response = await liquipediaQueue.add(
    async () =>
      liquipediaClient
        .get<LiquipediaBody>("/api.php", {
          headers: {
            "User-Agent": `dota-matches-api-${country}`,
          },
          params: {
            action: "parse",
            format: "json",
            page: "Portal:Teams",
          },
        })
        .catch((error: XiorError) => error),
    { throwOnTimeout: true },
  )

  console.log("Fetched teams!")
  if (isXiorError(response)) {
    throw new Error("Failed to fetch team data", { cause: response })
  }

  const teams = parseTeamsPage(response.data.parse.text["*"])
  if (teams.length === 0) return []

  await upsertTeamsData(teams)
  await env.META.put(MetaKey.TEAMS_LAST_FETCHED, Date.now().toString(), {
    expirationTtl: seconds("30d"),
  })

  return teams
}

export const getTeams =
  (env: Env) =>
  async (country: string): Promise<string[]> => {
    const lastFetched = Number((await env.META.get(MetaKey.TEAMS_LAST_FETCHED)) ?? -1)
    console.log(`Teams were last fetched at ${lastFetched}`)

    if (lastFetched !== -1 && Date.now() <= lastFetched + ms("12h")) {
      console.log(`Retrieving teams from DB...`)
      const result = await getTeamsFromDb()
      return result.rows.map(({ name }) => name)
    }

    console.log(`Fetching teams from Liquipedia...`)
    const teams = await fetchAndCacheTeams(env, country)
    return teams.map(({ name }) => name!)
  }

const getMatches = (env: Env) => async (country: string) => {
  console.log(`Getting match data...`)

  let lastFetched = Number((await env.META.get(MetaKey.MATCHES_LAST_FETCHED)) ?? -1)
  if (lastFetched !== -1) {
    return { lastFetched: Number(lastFetched), matches: await getMatchDataFromDb() }
  }

  const matches = await fetchMatches(country)

  await upsertMatchData(matches)

  lastFetched = Temporal.Now.instant().epochMilliseconds
  await env.META.put(MetaKey.MATCHES_LAST_FETCHED, lastFetched.toString(), {
    expirationTtl: EDGE_CACHE_TIMEOUT,
  })

  return { lastFetched, matches }
}

export const createDotaClient = (env: Env) => ({
  getMatches: getMatches(env),
  getTeams: getTeams(env),
})
