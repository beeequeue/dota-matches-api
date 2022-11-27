import {
  APIApplicationCommandInteractionDataOption,
  APIChatInputApplicationCommandInteraction,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10"
import { beforeEach, expect, it, vi } from "vitest"

import { createDb, Db } from "../db"
import { CHANNEL_ID, createSub, createTeam, GUILD_ID, initDb } from "../test-utils"
import { MetaKey } from "../utils"

import {
  Command,
  handleAutocompleteCommand,
  handleFollowCommand,
  handleUnfollowCommand,
} from "./commands"

const describe = setupMiniflareIsolatedStorage()
const agent = getMiniflareFetchMock()

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

let env: Env
let db: Db

beforeEach(async () => {
  vi.resetAllMocks()

  agent.disableNetConnect()
  agent.assertNoPendingInterceptors()

  env = getMiniflareBindings()
  db = createDb(env)
  await initDb(env)
})

describe("/follow", () => {
  it("saves a subscription", async () => {
    const result = await handleFollowCommand(
      db,
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
        flags: 64,
        content: `Okay, I will now notify you those teams' matches.`,
      },
    })

    const updatedGuild = await db
      .selectFrom("subscription")
      .selectAll()
      .where("guildId", "=", GUILD_ID)
      .orderBy("teamName")
      .execute()
    expect(updatedGuild).toStrictEqual([createSub("TSM"), createSub("Team Liquid")])
  })
})

describe("/unfollow", () => {
  it("removes a subscription", async () => {
    await db
      .insertInto("subscription")
      .values([createSub("TSM"), createSub("Team Liquid")])
      .execute()

    const result = await handleUnfollowCommand(
      db,
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
        flags: 64,
        content:
          "Okay, you will no longer receive notifications for Team Liquid anymore.",
      },
    })

    const subs = await db
      .selectFrom("subscription")
      .selectAll()
      .where("guildId", "=", GUILD_ID)
      .orderBy("teamName")
      .execute()
    expect(subs).toStrictEqual([createSub("TSM")])
  })
})

describe("autocomplete", () => {
  it("returns autocompletion entries", async () => {
    await db
      .insertInto("team")
      .values([
        createTeam("Evil Geniuses"),
        createTeam("Team Aster"),
        createTeam("Team Liquid"),
      ])
      .execute()
    await env.META.put(MetaKey.TEAMS_LAST_FETCHED, Date.now().toString())

    const result = await handleAutocompleteCommand(env, db, "test", "tema l")

    expect(result).toMatchObject({ status: 200 })
    await expect(result.json()).resolves.toStrictEqual({
      type: InteractionResponseType.ApplicationCommandAutocompleteResult,
      data: {
        choices: [
          {
            name: "Team Liquid",
            value: "Team Liquid",
          },
          {
            name: "Team Aster",
            value: "Team Aster",
          },
        ],
      },
    })
  })
})
