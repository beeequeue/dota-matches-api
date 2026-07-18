// oxlint-disable typescript/no-unnecessary-condition
import { nanoid } from "nanoid/non-secure"
import { ELEMENT_NODE, type ElementNode, parse, TEXT_NODE } from "ultrahtml"
import { querySelector, querySelectorAll } from "ultrahtml/selector"

import { type Match, type Team } from "./dota.ts"

export const getNodeText = (node: ElementNode): string => {
  return node.children
    .reduce((accum, child) => {
      if (child.type === ELEMENT_NODE) {
        return accum + getNodeText(child)
      }

      if (child.type === TEXT_NODE) {
        return accum + child.value
      }

      return accum
    }, "")
    .trim()
}

const extractTeam = (team$: ElementNode): Team => {
  if (getNodeText(team$).trim() === "TBD") {
    return { name: "TBD", url: null }
  }

  const name = (querySelector(team$, ".name > a") as ElementNode)?.attributes?.title
    ?.trim()
    ?.replace(/\s{2,}/g, " ")
  const urlPath = (querySelector(team$, '[href^="/dota2/"]') as ElementNode)?.attributes?.href

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
    const leagueLink$ = querySelector(match$, ".match-info-tournament-name > a") as ElementNode
    const streamTitles$ = querySelectorAll(match$, ".match-info-links a") as ElementNode[]

    if (teamBlocks$.length !== 2) {
      throw new Error("Couldn't find two team blocks in match")
    }
    const teams = [extractTeam(teamBlocks$[0]), extractTeam(teamBlocks$[1])] as Match["teams"]
    // For some reason we have to use `innerHTML` here instead of `textContent`
    // because the abbr tag might not be parsed correctly by node-html-parser?
    const matchType = getNodeText(
      querySelector(match$, ".match-info-header-scoreholder-lower") as ElementNode,
    )?.replace(/\(?(bo\d)\)?/i, "$1")
    const startTime = meta$.attributes["data-timestamp"]
    const leagueName = getNodeText(leagueLink$)
    const leagueUrl = leagueLink$.attributes.href
    const streamUrl = streamTitles$.find(
      (stream) =>
        stream.attributes?.href?.includes("/twitch/") ||
        stream.attributes?.href?.includes("/youtube/"),
    )?.attributes?.href

    return withHash({
      teams,
      matchType: matchType ?? null,
      startsAt: startTime
        ? Temporal.Instant.fromEpochMilliseconds(Number(startTime) * 1000).toString()
        : null,
      leagueName,
      leagueUrl: leagueUrl ? encodeURI(`https://liquipedia.net${leagueUrl}`) : null,
      streamUrl: streamUrl != null ? encodeURI(`https://liquipedia.net${streamUrl}`) : null,
    })
  })

  // Orders by start time, but puts matches with no start time at the end
  return matches.toSorted((a, b) => {
    if (a.startsAt == null) return 1
    if (b.startsAt == null) return -1

    return a.startsAt.localeCompare(b.startsAt)
  })
}

export const parseTeamsPage = (html: string): Team[] => {
  const root = parse(html) as ElementNode

  const notableTeamsTitle$ = querySelector(root, "#Notable_Active_Teams") as ElementNode
  const titleIndex = (notableTeamsTitle$.parent.parent as ElementNode).children.findIndex(
    (el) => el === notableTeamsTitle$.parent,
  )

  const notableTeams$ = querySelectorAll(
    (notableTeamsTitle$.parent.parent as ElementNode).children[titleIndex + 2],
    ".team-template-text > a",
  ) as ElementNode[]
  const data: Team[] = notableTeams$.map((el$) => {
    if (el$.children[0].type !== TEXT_NODE) {
      throw new Error("Couldn't find text in team element")
    }

    return {
      name: getNodeText(el$),
      url: `https://liquipedia.net${el$.attributes.href}`,
    }
  })

  return data.toSorted((a, b) => a.name!.localeCompare(b.name!))
}
