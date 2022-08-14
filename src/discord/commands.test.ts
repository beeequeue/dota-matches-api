import {
  APIApplicationCommandInteractionDataOption,
  APIChatInputApplicationCommandInteraction,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10"
import { MockAgent, setGlobalDispatcher } from "undici"
import { beforeEach, describe, expect, it } from "vitest"

import { decode, encode } from "../msgpack"

import { Command, handleFollowCommand, handleUnfollowCommand } from "./commands"
import { Guild } from "./index"

const GUILD_ID = "987613986523"
const CHANNEL_ID = "0986526095326812"

const createCommandInput = (
  name: Command,
  options: APIApplicationCommandInteractionDataOption[],
): APIChatInputApplicationCommandInteraction => ({
  type: InteractionType.ApplicationCommand,
  guild_id: GUILD_ID,
  channel_id: CHANNEL_ID,
  data: {
    type: ApplicationCommandType.ChatInput,
    guild_id: GUILD_ID,
    id: "123456",
    name,
    options,
  },

  id: "123456",
  application_id: "DISCORD_CLIENT_ID",
  locale: "en-US",
  token: "token",
  version: 1,
  guild_locale: "en-US",
})

let agent = new MockAgent()

beforeEach(() => {
  agent = new MockAgent()
  agent.disableNetConnect()
  setGlobalDispatcher(agent)
})

describe("/follow", () => {
  it("saves a subscription", async () => {
    const env = (await miniflare.getBindings()) as Env

    await env.WEBHOOKS.put(
      GUILD_ID,
      encode<Guild>({
        id: GUILD_ID,
        subscriptions: {},
        vanityUrlCode: null,
      }),
    )

    const result = await handleFollowCommand(
      env,
      createCommandInput(Command.Follow, [
        {
          type: ApplicationCommandOptionType.String,
          name: "team_one",
          value: "Team Liquid",
        },
        {
          type: ApplicationCommandOptionType.String,
          name: "team_two",
          value: "TSM",
        },
      ]),
    )

    expect(result.status).toBe(200)
    await expect(result.json()).resolves.toStrictEqual({
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: `Okay, I will now notify you those teams' matches.`,
      },
    })

    const updatedGuild = await decode((await env.WEBHOOKS.get(GUILD_ID))!)
    expect(updatedGuild).toStrictEqual({
      id: GUILD_ID,
      subscriptions: {
        [CHANNEL_ID]: ["Team Liquid", "TSM"],
      },
      vanityUrlCode: null,
    })
  })
})

describe("/unfollow", () => {
  it("removes a subscription", async () => {
    const env = (await miniflare.getBindings()) as Env

    await env.WEBHOOKS.put(
      GUILD_ID,
      encode<Guild>({
        id: GUILD_ID,
        subscriptions: {
          [CHANNEL_ID]: ["Team Liquid", "TSM"],
        },
        vanityUrlCode: null,
      }),
    )

    const result = await handleUnfollowCommand(
      env,
      createCommandInput(Command.Follow, [
        {
          type: ApplicationCommandOptionType.String,
          name: "team_name",
          value: "Team Liquid",
        },
      ]),
    )

    expect(result).toMatchObject({ status: 200 })
    await expect(result.json()).resolves.toStrictEqual({
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: "Okay, you will no longer receive notifications for that team.",
      },
    })

    const updatedGuild = await decode((await env.WEBHOOKS.get(GUILD_ID))!)
    expect(updatedGuild).toStrictEqual({
      id: GUILD_ID,
      subscriptions: {
        [CHANNEL_ID]: ["TSM"],
      },
      vanityUrlCode: null,
    })
  })
})
