import Fuzzy from "@leeoniya/ufuzzy"
import {
  type APIApplicationCommandAutocompleteResponse,
  type APIApplicationCommandInteractionDataStringOption,
  type APIChatInputApplicationCommandInteraction,
  type APIInteractionResponse,
  ApplicationCommandOptionType,
  InteractionResponseType,
  MessageFlags,
} from "discord-api-types/v10"
import type { Context } from "hono"

import { db } from "../db.ts"
import { createDotaClient } from "../dota.ts"
import { badRequest } from "../http-errors.ts"
import type { Subscription$ } from "../schema"

export const Command = {
  Follow: "follow",
  Unfollow: "unfollow",
  List: "follows",
} as const

const createCommandResponse = (
  content: string,
  ephemeral = true,
): APIInteractionResponse => ({
  type: InteractionResponseType.ChannelMessageWithSource,
  data: {
    flags: ephemeral ? MessageFlags.Ephemeral : undefined,
    content,
  },
})

export const handleFollowCommand = async (
  c: Context<{ Bindings: Env }>,
  body: APIChatInputApplicationCommandInteraction,
) => {
  const guildId = body.guild_id!
  const teamNames = body.data
    .options!.map((option) =>
      option.type === ApplicationCommandOptionType.String ? option.value : null,
    )
    .filter((value) => value != null)

  const data: Array<Subscription$> = teamNames.map((teamName) => ({
    guildId,
    channel: body.channel_id,
    teamName,
  }))
  await db
    .insertInto("subscription")
    .values(data)
    .onConflict((c) => c.doNothing())
    .execute()

  return c.json(
    createCommandResponse(`Okay, I will now notify you those teams' matches.`),
  )
}

export const handleUnfollowCommand = async (
  c: Context<{ Bindings: Env }>,
  body: APIChatInputApplicationCommandInteraction,
) => {
  const guildId = body.guild_id!
  const teamOption = body.data.options!.find(
    (option): option is APIApplicationCommandInteractionDataStringOption =>
      option.type === ApplicationCommandOptionType.String && option.name === "team_name",
  )

  if (teamOption == null) {
    throw badRequest("Got no team name.")
  }

  const removed = await db
    .deleteFrom("subscription")
    .where("guildId", "=", guildId)
    .where("channel", "=", body.channel.id)
    .where("teamName", "=", teamOption.value)
    .returning("teamName")
    .execute()

  if (removed.length === 0) {
    throw badRequest("Guild not registered.")
  }

  return c.json(
    createCommandResponse(
      `Okay, you will no longer receive notifications for ${teamOption.value} anymore.`,
    ),
  )
}

export const handleListCommand = async (
  c: Context<{ Bindings: Env }>,
  body: APIChatInputApplicationCommandInteraction,
) => {
  const subscriptions = await db
    .selectFrom("subscription")
    .select(["teamName"])
    .where("guildId", "=", body.guild_id!)
    .where("channel", "=", body.channel.id)
    .execute()

  if (subscriptions.length === 0) {
    const response: APIInteractionResponse = {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        flags: MessageFlags.Ephemeral,
        content: `This channel is not following any teams. Follow some with \`/follow <team>\`!`,
      },
    }

    return c.json(response)
  }

  return c.json(
    createCommandResponse(
      `This channel is following:
\`\`\`
${subscriptions.map((sub) => sub.teamName).join("\n")}
\`\`\``,
    ),
  )
}

export const handleAutocompleteCommand = async (
  c: Context<{ Bindings: Env }>,
  country: string,
  value: string,
) => {
  const dotaClient = createDotaClient(c.env)
  const teams = await dotaClient.getTeams(country)
  const fuzzy = new Fuzzy({ intraIns: 2, interIns: 5 })

  const [idxs] = fuzzy.search(teams, value)

  return c.json({
    type: InteractionResponseType.ApplicationCommandAutocompleteResult,
    data: {
      choices:
        idxs?.map((idx) => teams[idx]).map((team) => ({ name: team, value: team })) ?? [],
    },
  } satisfies APIApplicationCommandAutocompleteResponse)
}
