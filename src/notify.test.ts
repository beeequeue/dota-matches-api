import { env } from "cloudflare:test"
import { addDays, addHours, setMilliseconds } from "date-fns"
import type { APIEmbed, APIEmbedField } from "discord-api-types/v10"
import { beforeAll, beforeEach, describe, expect, it, type Mock, vi } from "vitest"

import { db } from "./db.ts"
import * as Discord from "./discord/index.ts"
import matchesFixture from "./fixtures/matches.json"
import { formatMatchToEmbedField, notifier } from "./notify.ts"
import type { Match$ } from "./schema.ts"
import { createSub } from "./test-utils.ts"

vi.mock("./discord/index")
const mockedDiscord = vi.mocked(Discord)

const extractDateFromEmbedField = (field: APIEmbedField | undefined) => {
  if (field == null) return null

  const [, value] = /@<t:(\d+):t>/.exec(field.value) ?? []
  if (value == null) return null

  return new Date(Number(value) * 1000)
}

beforeEach(() => {
  vi.setSystemTime(new Date("2025-06-12T12:00:00.000Z"))

  return () => vi.setSystemTime(vi.getRealSystemTime())
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
    ReturnType<(typeof Discord)["createDiscordClient"]>["sendMessage"]
  >

  beforeEach(() => {
    sendMessageMock = vi.fn(async () => Promise.resolve(null)) as never

    mockedDiscord.createDiscordClient.mockReturnValue({
      sendMessage: sendMessageMock,
    } as Partial<ReturnType<(typeof Discord)["createDiscordClient"]>> as ReturnType<
      (typeof Discord)["createDiscordClient"]
    >)
  })

  it("sends messages to channels", async () => {
    const now = new Date()
    const matches: Match$[] = [
      {
        id: "1",
        matchType: "Bo2",
        teamOneId: "Team Liquid",
        teamTwoId: "Nigma Galaxy",
        startsAt: setMilliseconds(addHours(now, 3), 0).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "2",
        matchType: "Bo2",
        teamOneId: "Nigma Galaxy",
        teamTwoId: "OG",
        startsAt: setMilliseconds(addHours(now, 12), 0).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "3",
        matchType: "Bo2",
        teamOneId: "something",
        teamTwoId: "someone",
        startsAt: setMilliseconds(addHours(now, 4.5), 0).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "4",
        matchType: "Bo2",
        teamOneId: "OG",
        teamTwoId: "Too Late To Be Included",
        startsAt: setMilliseconds(addDays(now, 4), 0).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
    ]
    await db.insertInto("match").values(matches).execute()

    await db
      .insertInto("subscription")
      .values([createSub("Team Liquid"), createSub("OG")])
      .execute()

    await notifier({} as never, env, {} as never)

    expect(sendMessageMock).toHaveBeenCalledOnce()

    const [channelId, embed] = sendMessageMock.mock.calls[0] as [string, APIEmbed]
    expect(channelId).toMatchInlineSnapshot('"0986526095326812"')

    expect(JSON.stringify(embed.fields)).toContain(
      "**Team Liquid** _vs_ **Nigma Galaxy**",
    )
    expect(JSON.stringify(embed.fields)).not.toContain("Too Late To Be Included")

    expect(embed).toMatchSnapshot()
  })

  it("orders matches correctly", async () => {
    const now = new Date()
    const matches: Match$[] = [
      {
        id: "3",
        matchType: "Bo2",
        teamOneId: "Team Liquid",
        teamTwoId: "OG",
        startsAt: setMilliseconds(addHours(now, 22), 0).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "1",
        matchType: "Bo2",
        teamOneId: "Team Liquid",
        teamTwoId: "OG",
        startsAt: setMilliseconds(addHours(now, 6), 0).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "2",
        matchType: "Bo2",
        teamOneId: "Team Liquid",
        teamTwoId: "OG",
        startsAt: setMilliseconds(addHours(now, 12), 0).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
    ]
    await db.insertInto("match").values(matches).execute()

    await db
      .insertInto("subscription")
      .values([createSub("Team Liquid"), createSub("OG")])
      .execute()

    await notifier({} as never, env, {} as never)

    expect(sendMessageMock).toHaveBeenCalledOnce()

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
