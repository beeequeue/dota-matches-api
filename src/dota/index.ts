import { differenceInHours } from "date-fns"
import { mande, MandeError } from "mande"

import { isNotNil } from "../utils"

import { teamsQuery } from "./queries"
import { TeamsQuery, TeamsQueryVariables } from "./types"

export type Match = {
  id: number
  startsAt: Date
  teams: [
    {
      id: number
      name: string
    },
    {
      id: number
      name: string
    },
  ]
}

const isMatchRelevant = (match: Match): boolean =>
  Math.abs(differenceInHours(new Date(), match.startsAt)) <= 24

const cleanMatchData = (
  series: NonNullable<
    NonNullable<NonNullable<TeamsQuery["teams"]>[number]>["series"]
  >[number],
): Match | null => {
  if (series == null) return null

  const firstGameStartTime = series.matches?.reduce(
    (accum, match) =>
      (accum ?? Number.NEGATIVE_INFINITY) <
      (match!.startDateTime ?? Number.POSITIVE_INFINITY)
        ? match!.startDateTime
        : accum,
    null as number | null,
  )

  if (firstGameStartTime == null) return null

  return {
    id: series.id,
    startsAt: new Date(firstGameStartTime * 1000),
    teams: [
      {
        id: series.teamOne!.id,
        name: series.teamOne!.name!,
      },
      {
        id: series.teamTwo!.id,
        name: series.teamTwo!.name!,
      },
    ],
  }
}

const stratzClient = mande("https://api.stratz.com", {
  responseAs: "json",
  headers: {
    Authorization: `Bearer ${STRATZ_TOKEN}`,
  },
})

const fetchLeagueMatches = async (ids: number[]): Promise<TeamsQuery> => {
  if (ids.length === 0) {
    return {
      teams: [],
    }
  }

  console.log(`Fetching ${ids.join(", ")}...`)

  const variables: TeamsQueryVariables = {
    ids,
  }
  const result = await stratzClient
    .post<{ data: TeamsQuery }>("/graphql", {
      query: teamsQuery,
      variables,
    })
    .catch((error: MandeError) => error)

  if (result instanceof Error) {
    const body = await result.response
      .json<Record<string, unknown>>()
      .catch(() => result.response.text().catch(() => null))
    console.error({
      status: result.response.status,
      body,
    })
    throw new Error(
      `Failed to fetch matches: ${result.response.status}, ${JSON.stringify(body!)}`,
    )
  }

  return result.data
}

const getTeamsData = async (env: Env, ids: number[]) => {
  console.log(`Getting match data for ${ids.join(", ")}...`)

  const matches: Match[] = []
  const notCachedIds = new Set<number>()

  await Promise.all(
    ids.map(async (id) => {
      const cached = await env.CACHE.get(id.toString())
      if (cached != null) {
        matches.push(...(JSON.parse(cached) as Match[]))
        return
      }

      notCachedIds.add(id)
    }),
  )
  console.log(`Found ${ids.length - notCachedIds.size} cached teams`)

  if (notCachedIds.size > 0) {
    console.log(`Fetching ${notCachedIds.size} matches...`)

    const data = await fetchLeagueMatches([...notCachedIds])
    const matchesByTeam = (data.teams ?? []).reduce((accum, team) => {
      if (team == null || team.series == null) return accum

      accum[team.id.toString()] ??= []

      const newMatches = team.series
        .map(cleanMatchData)
        .filter((match): match is Match => isNotNil(match) && isMatchRelevant(match))
      accum[team.id.toString()].push(...newMatches)

      return accum
    }, {} as Record<string, Match[]>)

    console.log(`Caching ${Object.keys(matchesByTeam).length} teams...`)
    await Promise.all(
      Object.entries(matchesByTeam).map(async ([teamId, newMatches]) => {
        await env.CACHE.put(teamId, JSON.stringify(newMatches), {
          expirationTtl: 60 * 60 * 3,
        })

        matches.push(...newMatches)
      }),
    )
  }

  console.log(`Deduping and returning...`)
  const matchIds = new Set<number>()
  return matches.filter((match) => {
    if (!matchIds.has(match.id)) {
      matchIds.add(match.id)
      return true
    }

    return false
  })
}

export const Dota = { getTeamsData }
