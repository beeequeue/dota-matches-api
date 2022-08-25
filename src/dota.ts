import { mande, MandeError } from "mande"
import { HTMLElement, parse } from "node-html-parser"
import PQueue from "p-queue"
import { compact } from "remeda"

import { arr2hex, sha1 } from "./crypto"
import { nowSeconds, seconds } from "./utils"

const ONE_DAY = seconds("1 day")
const THREE_HOURS = seconds("3 hours")

type Team = {
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
        leagueUrl: leagueUrl ? `https://liquipedia.net${leagueUrl}` : null,
        streamUrl: streamName
          ? `https://liquipedia.net/dota2/Special:Stream/twitch/${streamName}`
          : null,
      })
    }),
  )
}

export const TEAMS_CACHE_KEY = "liquipedia-teams"

export const parseTeamsPage = (html: string): string[] => {
  const root = parse(html)

  const notableTeamsContainer$ = root.querySelector(
    "h2:has(#Notable_Active_Teams) + div",
  )!
  const notableTeams$ = notableTeamsContainer$.querySelectorAll(".team-template-text")

  return compact(notableTeams$?.map((el$) => el$.textContent.trim())).sort((a, b) =>
    a.localeCompare(b),
  )
}

const fetchAndCacheTeams = async (env: Env, country: string): Promise<string[]> => {
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

  await env.CACHE.put(TEAMS_CACHE_KEY, JSON.stringify(teams), {
    expirationTtl: ONE_DAY * 30,
    metadata: {
      softExpires: nowSeconds() + THREE_HOURS,
    } as SoftExpire,
  })

  return teams
}

export type SoftExpire = { softExpires: number }

export const getTeams = async (env: Env, country: string): Promise<string[]> => {
  const cached = await env.CACHE.getWithMetadata<SoftExpire>(TEAMS_CACHE_KEY)
  if (cached?.value != null) {
    if (Math.round(Date.now() / 1000) > (cached.metadata?.softExpires ?? 0)) {
      void fetchAndCacheTeams(env, country)
    }

    return JSON.parse(cached.value)
  }

  return await fetchAndCacheTeams(env, country)
}

export const MATCHES_CACHE_KEY = "liquipedia-matches"

const getMatches = async (env: Env, country: string): Promise<Match[]> => {
  console.log(`Getting match data...`)

  const cached = await env.CACHE.get(MATCHES_CACHE_KEY)
  if (cached != null) {
    return JSON.parse(cached)
  }

  const matches = await fetchMatches(country)

  await env.CACHE.put(MATCHES_CACHE_KEY, JSON.stringify(matches), {
    expirationTtl: THREE_HOURS,
  })

  return matches
}

export const Dota = { getTeams, getMatches }
