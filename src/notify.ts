import { addDays, isBefore } from "date-fns"
import { indexBy } from "remeda"

import { Guild } from "./discord"
import { Dota } from "./dota"
import { decode } from "./msgpack"

export const notifier: ExportedHandlerScheduledHandler<Env> = async (
  _controller,
  env,
) => {
  const unfilteredMatches = await Dota.getMatches(env, "main")
  const relevantMatches = unfilteredMatches.filter(
    (match) =>
      match.startsAt != null &&
      match.teams[0]?.name != null &&
      match.teams[1]?.name != null &&
      isBefore(new Date(match.startsAt), addDays(Date.now(), 1)),
  )
  const matches = indexBy(relevantMatches, (match) => match.hash)
  const matchesByTeam = relevantMatches.reduce((accum, match) => {
    if (match.teams[0]?.name != null) {
      accum[match.teams[0].name] ??= new Set()
      accum[match.teams[0].name].add(match.hash)
    }
    if (match.teams[1]?.name != null) {
      accum[match.teams[1].name] ??= new Set()
      accum[match.teams[1].name].add(match.hash)
    }

    return accum
  }, {} as Record<string, Set<string>>)
  const teams = Object.keys(matchesByTeam)

  const guildObjects = await env.WEBHOOKS.list()

  const guilds = await Promise.all(
    guildObjects.objects.map(async ({ key }) => {
      const obj = (await env.WEBHOOKS.get(key))!
      return decode<Guild>(obj)
    }),
  )

  const channelsMatches: Array<[string, Set<string>]> = []
  for (const guild of guilds) {
    for (const channelId in guild.subscriptions) {
      const followedTeams = Object.values(guild.subscriptions[channelId])
      const matchesToAdd = new Set(
        followedTeams.reduce(
          (accum, team) => [...accum, ...(matchesByTeam[team] ?? [])],
          [] as string[],
        ),
      )

      channelsMatches.push([channelId, matchesToAdd])
    }
  }

  console.log(channelsMatches)
}
