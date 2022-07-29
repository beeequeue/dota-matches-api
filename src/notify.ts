import { addDays, isBefore } from "date-fns"
import { indexBy } from "remeda"
import dedent from "ts-dedent"

import { Discord, getToken, Guild } from "./discord"
import { Dota, Match } from "./dota"
import { decode } from "./msgpack"

export const formatMatchToMessageLine = (match: Match) => {
  const teams = match.teams.map((team) => `**${team!.name!}**`).join(" vs ")

  const startsAt = Math.round(new Date(match.startsAt!).getTime() / 1000)

  return dedent`
    ${teams}
    @<t:${startsAt}:t> (<t:${startsAt}:R>)${match.streamUrl ? `\n${match.streamUrl}` : ""}
  `
}

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

  const cachedMessages = new Map<string, string>()
  const getMessageLinesForChannel = (channelId: string, matchHashes: Set<string>) => {
    const messages = [...matchHashes].map((hash) => {
      if (cachedMessages.has(channelId)) {
        return cachedMessages.get(channelId)!
      }

      const matchMessage = formatMatchToMessageLine(matches[hash])
      cachedMessages.set(hash, matchMessage)
      return matchMessage
    })

    return messages
  }

  const messages = channelsMatches.map(([channelId, matchHashes]) => {
    const matchLines = getMessageLinesForChannel(channelId, matchHashes)

    const message = dedent`
      Here are today's matches!
      -----------------------
      ${matchLines.join("\n\n")}
    `

    return [channelId, message]
  })

  const token = await getToken(env)
  await Promise.all(
    messages.map(async ([channelId, message]) => {
      await Discord.sendMessage(token, channelId, message)
    }),
  )
}
