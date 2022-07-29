import { mande } from "mande"
import { HTMLElement, parse } from "node-html-parser"
import PQueue from "p-queue"

import { arr2hex, sha1 } from "./crypto"

const THREE_HOURS = 60 * 60 * 3

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

type LiquipediaBody = {
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
    url: urlPath ? `https://liquipedia.com${urlPath}` : null,
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

const fetchTeamsData = async (country: string): Promise<Match[]> => {
  const data = await liquipediaQueue.add(() =>
    liquipediaClient.get<LiquipediaBody>("/api.php", {
      headers: {
        "User-Agent": `dota-matches-api-${country}/${GIT_SHA}`,
      },
      query: {
        action: "parse",
        page: "Liquipedia:Upcoming_and_ongoing_matches",
      },
    }),
  )

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

      return await withHash({
        teams,
        matchType: matchType ?? null,
        startsAt: startTime ? new Date(Number(startTime) * 1000).toISOString() : null,
        leagueName,
        streamUrl: streamName ? `https://www.twitch.tv/${streamName}` : null,
      })
    }),
  )
}

export const CACHE_KEY = "liquipedia-matches"

const getMatches = async (env: Env, country: string): Promise<Match[]> => {
  console.log(`Getting match data...`)

  const cached = await env.CACHE.get(CACHE_KEY)
  if (cached != null) {
    return JSON.parse(cached)
  }

  const matches = await fetchTeamsData(country)

  await env.CACHE.put(CACHE_KEY, JSON.stringify(matches), {
    expirationTtl: THREE_HOURS,
  })

  return matches
}

export const Dota = { getMatches }
