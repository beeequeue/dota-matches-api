import { addDays, addHours } from "date-fns"
import { APIEmbedField } from "discord-api-types/payloads/v10/channel"
import { APIEmbed } from "discord-api-types/v10"
import { beforeAll, beforeEach, expect, it, Mock, vi } from "vitest"

import { MatchTable } from "./db"
import * as Discord from "./discord/index"
import matchesFixture from "./fixtures/matches.json"
import { formatMatchToEmbedField, notifier } from "./notify"
import { createSub, initDb } from "./test-utils"

vi.mock("./discord/index")
const mockedDiscord = vi.mocked(Discord)

const describe = setupMiniflareIsolatedStorage()

const extractDateFromEmbedField = (field: APIEmbedField | undefined) => {
  if (field == null) return null

  const [, value] = /@<t:(\d+):t>/.exec(field.value) ?? []
  if (value == null) return null

  return new Date(Number(value) * 1000)
}

beforeEach(async (ctx) => {
  vi.setSystemTime(new Date("2020-01-01"))

  await initDb(ctx)
})

describe("formatMatchToEmbedField", () => {
  beforeAll(() => {
    vi.setSystemTime(new Date("2022-07-31T14:00:00.000Z"))

    return () => vi.setSystemTime(vi.getRealSystemTime())
  })

  it.each(matchesFixture)("should format matches correctly %#", (match) => {
    const message = formatMatchToEmbedField(match)

    expect(message).toMatchSnapshot()
  })
})

describe("notifier", () => {
  let sendMessageMock: Mock<
    Parameters<ReturnType<(typeof Discord)["createDiscordClient"]>["sendMessage"]>,
    ReturnType<ReturnType<(typeof Discord)["createDiscordClient"]>["sendMessage"]>
  >

  beforeEach(() => {
    sendMessageMock = vi.fn(() => Promise.resolve(null)) as any

    mockedDiscord.createDiscordClient.mockReturnValue({
      sendMessage: sendMessageMock,
    } as Partial<ReturnType<(typeof Discord)["createDiscordClient"]>> as ReturnType<(typeof Discord)["createDiscordClient"]>)
  })

  it("sends messages to channels", async (ctx) => {
    const now = new Date()
    const matches: MatchTable[] = [
      {
        id: "1",
        matchType: "Bo2",
        teamOneId: "Team Liquid",
        teamTwoId: "Nigma Galaxy",
        startsAt: addHours(now, 3).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "2",
        matchType: "Bo2",
        teamOneId: "Nigma Galaxy",
        teamTwoId: "OG",
        startsAt: addHours(now, 12).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "3",
        matchType: "Bo2",
        teamOneId: "something",
        teamTwoId: "someone",
        startsAt: addHours(now, 4.5).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "4",
        matchType: "Bo2",
        teamOneId: "OG",
        teamTwoId: "Too Late To Be Included",
        startsAt: addDays(now, 4).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
    ]
    await ctx.db.insertInto("match").values(matches).execute()

    await ctx.db
      .insertInto("subscription")
      .values([createSub("Team Liquid"), createSub("OG")])
      .execute()

    await notifier({} as never, ctx.env, {} as never)

    expect(sendMessageMock).toHaveBeenCalledOnce()
    // eslint-disable-next-line prefer-destructuring
    const [channelId, embed] = sendMessageMock.mock.calls[0] as [string, APIEmbed]
    expect(channelId).toMatchInlineSnapshot('"0986526095326812"')

    expect(JSON.stringify(embed.fields)).toContain(
      "**Team Liquid** _vs_ **Nigma Galaxy**",
    )
    expect(JSON.stringify(embed.fields)).not.toContain("Too Late To Be Included")

    expect(embed).toMatchSnapshot()
  })

  it("orders matches correctly", async (ctx) => {
    const now = new Date()
    const matches: MatchTable[] = [
      {
        id: "3",
        matchType: "Bo2",
        teamOneId: "Team Liquid",
        teamTwoId: "OG",
        startsAt: addHours(now, 22).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "1",
        matchType: "Bo2",
        teamOneId: "Team Liquid",
        teamTwoId: "OG",
        startsAt: addHours(now, 6).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "2",
        matchType: "Bo2",
        teamOneId: "Team Liquid",
        teamTwoId: "OG",
        startsAt: addHours(now, 12).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
    ]
    await ctx.db.insertInto("match").values(matches).execute()

    await ctx.db
      .insertInto("subscription")
      .values([createSub("Team Liquid"), createSub("OG")])
      .execute()

    await notifier({} as never, ctx.env, {} as never)

    expect(sendMessageMock).toHaveBeenCalledOnce()
    // eslint-disable-next-line prefer-destructuring
    const embed = sendMessageMock.mock.calls[0][1] as APIEmbed

    expect(extractDateFromEmbedField(embed?.fields?.[0])).toStrictEqual(
      new Date(matches[1].startsAt!),
    )
    expect(extractDateFromEmbedField(embed?.fields?.[1])).toStrictEqual(
      new Date(matches[2].startsAt!),
    )
    expect(extractDateFromEmbedField(embed?.fields?.[2])).toStrictEqual(
      new Date(matches[0].startsAt!),
    )
  })
})
