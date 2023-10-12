import { APIApplicationCommandInteractionDataStringOption } from "discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/string"
import {
  APIApplicationCommandAutocompleteResponse,
  APIChatInputApplicationCommandInteraction,
  APIInteractionResponse,
  ApplicationCommandOptionType,
  InteractionResponseType,
  MessageFlags,
} from "discord-api-types/v10"
import { and, eq } from "drizzle-orm"
import { DrizzleD1Database } from "drizzle-orm/d1"
import { isTruthy } from "remeda"

import Fuzzy from "@leeoniya/ufuzzy"
import { badRequest } from "@worker-tools/response-creators"

import { createDotaClient } from "../dota"
import { $subscriptions } from "../schema"
import { json } from "../utils"

export enum Command {
  Follow = "follow",
  Unfollow = "unfollow",
  List = "follows",
}

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
  db: DrizzleD1Database,
  body: APIChatInputApplicationCommandInteraction,
) => {
  const guildId = body.guild_id!
  const teamNames = body.data
    .options!.map((option) =>
      option.type === ApplicationCommandOptionType.String ? option.value : null,
    )
    .filter(isTruthy)

  const data: Array<typeof $subscriptions.$inferInsert> = teamNames.map((teamName) => ({
    guildId,
    channel: body.channel_id,
    teamName,
  }))
  await db.insert($subscriptions).values(data).onConflictDoNothing()

  return json(createCommandResponse(`Okay, I will now notify you those teams' matches.`))
}

export const handleUnfollowCommand = async (
  db: DrizzleD1Database,
  body: APIChatInputApplicationCommandInteraction,
) => {
  const guildId = body.guild_id!
  const teamOption = body.data.options!.find(
    (option): option is APIApplicationCommandInteractionDataStringOption =>
      option.type === ApplicationCommandOptionType.String && option.name === "team_name",
  )

  if (teamOption == null) {
    return badRequest("Got no team name.")
  }

  const removed = await db
    .delete($subscriptions)
    .where(
      and(
        eq($subscriptions.guildId, guildId),
        eq($subscriptions.channel, body.channel_id),
        eq($subscriptions.teamName, teamOption.value),
      ),
    )
    .returning({ teamName: $subscriptions.teamName })

  if (removed.length === 0) {
    return badRequest("Guild not registered.")
  }

  return json(
    createCommandResponse(
      `Okay, you will no longer receive notifications for ${teamOption.value} anymore.`,
    ),
  )
}

export const handleListCommand = async (
  db: DrizzleD1Database,
  body: APIChatInputApplicationCommandInteraction,
) => {
  const subscriptions = await db
    .select({
      teamName: $subscriptions.teamName,
    })
    .from($subscriptions)
    .where(
      and(
        eq($subscriptions.guildId, body.guild_id!),
        eq($subscriptions.channel, body.channel_id),
      ),
    )

  if (subscriptions.length === 0) {
    const response: APIInteractionResponse = {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        flags: MessageFlags.Ephemeral,
        content: `This channel is not following any teams. Follow some with \`/follow <team>\`!`,
      },
    }

    return json(response)
  }

  return json(
    createCommandResponse(
      `This channel is following:
\`\`\`
${subscriptions.map((sub) => sub.teamName).join("\n")}
\`\`\``,
    ),
  )
}

export const handleAutocompleteCommand = async (
  env: Env,
  db: DrizzleD1Database,
  country: string,
  value: string,
) => {
  const dotaClient = createDotaClient(env, db)
  const teams = await dotaClient.getTeams(country)
  const fuzzy = new Fuzzy({ intraIns: 2, interIns: 5 })

  // eslint-disable-next-line unicorn/no-array-method-this-argument
  const [idxs] = fuzzy.search(teams, value)

  return json<APIApplicationCommandAutocompleteResponse>({
    type: InteractionResponseType.ApplicationCommandAutocompleteResult,
    data: {
      choices:
        idxs?.map((idx) => teams[idx]).map((team) => ({ name: team, value: team })) ?? [],
    },
  })
}
