import {
  APIChatInputApplicationCommandInteraction,
  APIInteractionResponse,
  ApplicationCommandOptionType,
  InteractionResponseType,
} from "discord-api-types/v10"

import { badRequest } from "@worker-tools/response-creators"

import { decode, encode } from "../msgpack"
import { json } from "../utils"

import { Guild } from "./index"

export enum Command {
  Follow = "follow",
  Unfollow = "unfollow",
  List = "follows",
}

// enum MessageComponentId {}

export const handleFollowCommand = async (
  env: Env,
  body: APIChatInputApplicationCommandInteraction,
) => {
  const guildId = body.guild_id!
  const teamNames = body.data
    .options!.map((option) =>
      option.type === ApplicationCommandOptionType.String ? option.value : null,
    )
    .filter((value): value is string => value != null)

  const guildObject = await env.WEBHOOKS.get(guildId)
  if (guildObject == null) {
    return badRequest("Guild not registered.")
  }

  const guild = await decode<Guild>(guildObject)
  guild.subscriptions[body.channel_id] ??= []

  for (const subscribedChannelId in guild.subscriptions) {
    if (subscribedChannelId === body.channel_id) {
      guild.subscriptions[body.channel_id] = [
        // New teams are added _first_ in the array, to make deduping easier
        ...new Set([...teamNames, ...guild.subscriptions[body.channel_id]]),
      ]
    }
  }

  await env.WEBHOOKS.put(guildId, encode(guild))

  const response: APIInteractionResponse = {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      content: `Okay, I will now notify you those teams' matches.`,
    },
  }

  return json(response)
}

export const handleListCommand = async (
  env: Env,
  body: APIChatInputApplicationCommandInteraction,
) => {
  const guildObject = await env.WEBHOOKS.get(body.guild_id!)
  if (guildObject == null) {
    return badRequest("Guild not registered.")
  }

  const guild = await decode<Guild>(guildObject)
  if (guild.subscriptions[body.channel_id] == null) {
    const response: APIInteractionResponse = {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: `This channel is not following any teams. Follow some with '/follow <team>'!`,
      },
    }

    return json(response)
  }

  const response: APIInteractionResponse = {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      content: `This channel is following:
\`\`\`
${guild.subscriptions[body.channel_id].join("\n")}
\`\`\``,
    },
  }

  return json(response)
}
