import { nanoid } from "nanoid/non-secure"
import { Temporal } from "temporal-polyfill"
import { type ElementNode, parse } from "ultrahtml"
import { querySelector, querySelectorAll } from "ultrahtml/selector"

import type { Match, Team } from "./dota"
import { getNodeText } from "./utils"

const extractTeam = (team$: ElementNode): Team => {
  if (getNodeText(team$).trim() === "TBD") {
    return {
      name: "TBD",
      url: null,
    }
  }

  const name = (querySelector(team$, ".name > a") as ElementNode)?.attributes?.title
    ?.trim()
    // eslint-disable-next-line e18e/prefer-static-regex
    ?.replace(/\s{2,}/g, " ")
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

export const parseMatchesPage = (html: string) => {
  const root = parse(html) as ElementNode

  const $matches = querySelectorAll(root, ".match-info")
  if ($matches.length === 0) return []

  const matches = $matches.map((match$) => {
    const teamBlocks$ = querySelectorAll(match$, ".block-team") as ElementNode[]
    const meta$ = querySelector(match$, ".timer-object") as ElementNode
    const leagueLink$ = querySelector(
      match$,
      ".league-icon-small-image > a",
    ) as ElementNode
    const streamTitle$ = querySelector(match$, ".match-streams a") as ElementNode

    if (teamBlocks$.length !== 2) {
      throw new Error("Couldn't find two team blocks in match")
    }
    const teams = [
      extractTeam(teamBlocks$[0]),
      extractTeam(teamBlocks$[1]),
    ] as Match["teams"]
    // For some reason we have to use `innerHTML` here instead of `textContent`
    // because the abbr tag might not be parsed correctly by node-html-parser?
    const matchType = getNodeText(
      querySelector(match$, ".match-info-header-scoreholder-lower") as ElementNode,
      // eslint-disable-next-line e18e/prefer-static-regex
    )?.replace(/\(?(bo\d)\)?/i, "$1")
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
