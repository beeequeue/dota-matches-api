/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */

import { Dota } from "./dota"

type Match = {
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

const run = async () => {
  const data = await Dota.fetchTeamsData([2163])

  const matchIds = new Set<number>()
  const matches: Match[] = []

  for (const team of data.teams ?? []) {
    for (const match of team?.series ?? []) {
      if (match == null || matchIds.has(match.id!)) continue

      const firstGameStartTime = match.matches?.reduce(
        (accum, match) =>
          (accum ?? Number.NEGATIVE_INFINITY) <
          (match!.startDateTime ?? Number.POSITIVE_INFINITY)
            ? match!.startDateTime
            : accum,
        null as number | null,
      )

      // TODO: Add time cutoff here
      if (firstGameStartTime == null) continue

      matchIds.add(match.id!)
      matches.push({
        id: match.id!,
        startsAt: new Date(firstGameStartTime * 1000),
        teams: [
          {
            id: match.teamOne!.id!,
            name: match.teamOne!.name!,
          },
          {
            id: match.teamTwo!.id!,
            name: match.teamTwo!.name!,
          },
        ],
      })
    }
  }

  console.log(JSON.stringify(matches, null, 2))
}

run()
