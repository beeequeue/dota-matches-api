import { compareAsc } from "date-fns"
import type { APIEmbed, APIEmbedField } from "discord-api-types/v10"
import { groupBy } from "es-toolkit"

import { db } from "./db.ts"
import { createDiscordClient } from "./discord/index.ts"
import type { Match$, Subscription$ } from "./schema"

const orEmpty = <T>(check: T | null | undefined, value: string) =>
  check != null ? value : ""

const embedTemplate: Omit<APIEmbed, "fields"> = {
  title: "Today's matches!",
  url: "https://liquipedia.net/dota2/Liquipedia:Upcoming_and_ongoing_matches",
  color: 10_038_562,
  thumbnail: {
    url: "https://f003.backblazeb2.com/file/bq-files/2022/07/point.webp",
  },
  footer: {
    text: "Data provided by Liquipedia",
    icon_url:
      "https://liquipedia.net/commons/extensions/TeamLiquidIntegration/resources/pagelogo/liquipedia_icon_menu.png",
  },
}

export const formatMatchToEmbedField = (
  match: Omit<Match$, "id"> & Pick<Subscription$, "channel">,
): APIEmbedField => {
  const teams = [match.teamOneId, match.teamTwoId]
    .map((teamName) => `**${teamName ?? "?"}**`)
    .join(" _vs_ ")

  const startsAtUnix =
    match.startsAt != null ? Math.round(new Date(match.startsAt).getTime() / 1000) : null
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
  globalThis.__env__ = env

  const now = new Date()

  const subscribedMatchesInTimeframe = await db
    .selectFrom("match")
    .innerJoin("subscription", (join) =>
      join.on((eb) =>
        eb.or([
          eb("teamOneId", "=", "subscription.teamName"),
          eb("teamTwoId", "=", "subscription.teamName"),
        ]),
      ),
    )
    .select([
      "match.id",
      "match.matchType",
      "match.teamOneId",
      "match.teamTwoId",
      "match.leagueName",
      "match.streamUrl",
      "match.startsAt",

      "subscription.channel",
    ])
    .where("startsAt", ">", `datetime(${now.toISOString()})`)
    .where("startsAt", "<", `datetime(${now.toISOString()}, '1 day')`)
    .groupBy(["id", "channel"])
    .execute()

  const matchesByChannel = groupBy(subscribedMatchesInTimeframe, (match) => match.channel)

  const messages = Object.entries(matchesByChannel).map(([channelId, matches]) => {
    matches.sort((a, b) => compareAsc(new Date(a.startsAt!), new Date(b.startsAt!)))

    const embed: APIEmbed = {
      ...embedTemplate,
      fields: matches.map((match) => formatMatchToEmbedField(match)),
    }

    return [channelId, embed] as const
  })

  const discordClient = createDiscordClient({ env } as never)
  await Promise.all(
    messages.map(async ([channelId, embed]) => {
      await discordClient.sendMessage(channelId, embed)
    }),
  )
}
