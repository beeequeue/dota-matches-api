import { addDays, format, isBefore } from "date-fns"
import { APIEmbed, APIEmbedField } from "discord-api-types/v10"
import { indexBy } from "remeda"

import { createDiscordClient, Guild } from "./discord"
import { Dota, Match } from "./dota"
import { decode } from "./msgpack"

const orEmpty = <T>(check: T | null | undefined, value: string) => (check ? value : "")

export const formatMatchToEmbedField = (match: Match): APIEmbedField => {
  const teams = match.teams.map((team) => `**${team!.name!}**`).join(" _vs_ ")

  const startsAtUnix = match.startsAt
    ? Math.round(new Date(match.startsAt).getTime() / 1000)
    : null
  const matchType = orEmpty(match.matchType, `${match.matchType!} `)
  const startsAt = orEmpty(
    startsAtUnix,
    `@<t:${startsAtUnix!}:t> (<t:${startsAtUnix!}:R>)`,
  )
  const leagueName = orEmpty(match.leagueName, `${match.leagueName!}`)
  const separator = match.leagueName != null && match.streamUrl != null ? " | " : ""
  const streamLink = orEmpty(match.streamUrl, `[Stream](${match.streamUrl!})`)

  return {
    name: teams,
    value: `${matchType}${startsAt}\n${leagueName}${separator}${streamLink}`,
  }
}

export const notifier: ExportedHandlerScheduledHandler<Env> = async (
  _controller,
  env: Env,
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

      if (matchesToAdd.size > 0) {
        channelsMatches.push([channelId, matchesToAdd])
      }
    }
  }

  const cachedFields = new Map<string, APIEmbedField>()
  const getFieldsForChannel = (channelId: string, matchHashes: Set<string>) => {
    const fields = [...matchHashes].map((hash) => {
      if (cachedFields.has(channelId)) {
        return cachedFields.get(channelId)!
      }

      const matchField = formatMatchToEmbedField(matches[hash])
      cachedFields.set(hash, matchField)
      return matchField
    })

    return fields
  }

  const embedTemplate: Omit<APIEmbed, "fields"> = {
    title: `Today's matches - ${format(new Date(), "MMM do")}`,
    url: "https://liquipedia.net/dota2/Liquipedia:Upcoming_and_ongoing_matches",
    thumbnail: {
      url: "https://f003.backblazeb2.com/file/bq-files/2022/07/point.webp",
    },
    footer: {
      text: "Data provided by Liquipedia",
      icon_url:
        "https://liquipedia.net/commons/extensions/TeamLiquidIntegration/resources/pagelogo/liquipedia_icon_menu.png",
    },
  }

  const messages = channelsMatches.map(([channelId, matchHashes]) => {
    // const matchLines = getMessageLinesForChannel(channelId, matchHashes)

    const embed: APIEmbed = {
      ...embedTemplate,
      fields: getFieldsForChannel(channelId, matchHashes),
    }

    return [channelId, embed] as const
  })

  const discordClient = createDiscordClient(env)
  await Promise.all(
    messages.map(async ([channelId, embed]) => {
      // const { id: threadId } = await discordClient.createThread(channelId)

      await discordClient.sendMessage(channelId, embed)
    }),
  )
}
