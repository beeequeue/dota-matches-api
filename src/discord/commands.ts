import {
  InteractionResponseType,
  InteractionType,
  MessageComponent,
} from "discord-interactions"
import { encode } from "msgpackr/pack"
import { decode } from "msgpackr/unpack"

import { badRequest } from "@worker-tools/response-creators"

import { json } from "../utils"

import { Guild } from "./index"

export type InteractionsBody = {
  type: InteractionType
  token: string
  member: unknown
  guild_id: string
  channel_id: string
  data?: {
    id: string
    name: "follow" | "unfollow" | "follows"
    options: Array<{ name: string; type: number; value: string }>
  }
}

type InteractionsResponse = {
  type: InteractionResponseType
  data?: {
    tts?: boolean
    content?: string
    embeds?: unknown[]
    allowed_mentions?: unknown
    flags?: number
    components?: MessageComponent[]
    attachments?: unknown[]
  }
}

enum MessageComponentId {}

export const handleFollowCommand = async (env: Env, body: InteractionsBody) => {
  const teamNames = body.data!.options.map(({ value }) => value)

  const guildObject = await env.WEBHOOKS.get(body.guild_id)
  if (guildObject == null) {
    return badRequest("Guild not registered.")
  }

  const guild = decode(new Uint8Array(await guildObject.arrayBuffer())) as Guild
  for (const subscribedChannelId in guild.subscriptions) {
    if (subscribedChannelId === body.channel_id) {
      guild.subscriptions[body.channel_id] = [
        // New teams are added _first_ in the array, to make deduping easier
        ...new Set([...teamNames, ...guild.subscriptions[body.channel_id]]),
      ]
    }
  }

  await env.WEBHOOKS.put(body.guild_id, encode(guild) as ArrayBuffer)

  const response: InteractionsResponse = {
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `Okay, I will now notify you those teams' matches.`,
    },
  }

  return json(response)
}

export const handleListCommand = async (env: Env, body: InteractionsBody) => {
  const guildObject = await env.WEBHOOKS.get(body.guild_id)
  if (guildObject == null) {
    return badRequest("Guild not registered.")
  }

  const guild = decode(new Uint8Array(await guildObject.arrayBuffer())) as Guild
  if (guild.subscriptions[body.channel_id] == null) {
    const response: InteractionsResponse = {
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `This channel is not following any teams. Follow some with '/follow <team>'!`,
      },
    }

    return json(response)
  }

  const response: InteractionsResponse = {
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `This channel is following:
\`\`\`
${guild.subscriptions[body.channel_id].join("\n")}
\`\`\``,
    },
  }

  return json(response)
}
