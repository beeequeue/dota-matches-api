import { env } from "cloudflare:workers"
import { type APIEmbed, type APIEmbedField } from "discord-api-types/v10"
import { FetchMocker, MockServer, type ResponseCreator } from "mentoss"
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest"

import { db } from "./db.ts"
import matchesFixture from "./fixtures/matches.json"
import { formatMatchToEmbedField, notifier } from "./notify.ts"
import { type Match$ } from "./schema.ts"
import { CHANNEL_ID, createSub } from "./test-utils.ts"

const server = new MockServer("https://discord.com/api/v10")
const mocker = new FetchMocker({ servers: [server] })
mocker.mockGlobal()

const extractDateFromEmbedField = (field: APIEmbedField | undefined) => {
  if (field == null) return null

  const [, value] = /@<t:(\d+):t>/.exec(field.value) ?? []
  if (value == null) return null

  return Temporal.Instant.fromEpochMilliseconds(Number(value) * 1000)
}

beforeEach(async () => {
  vi.setSystemTime(Temporal.Instant.from("2025-06-12T12:00:00.000Z").epochMilliseconds)

  mocker.clearAll()

  await Promise.all([
    db.deleteFrom("match").execute(),
    db.deleteFrom("team").execute(),
    db.deleteFrom("league").execute(),
    db.deleteFrom("subscription").execute(),
  ])

  return () => vi.setSystemTime(vi.getRealSystemTime())
})

describe("formatMatchToEmbedField", () => {
  beforeAll(() => {
    vi.setSystemTime(Temporal.Instant.from("2022-07-31T14:00:00.000Z").epochMilliseconds)

    return () => vi.setSystemTime(vi.getRealSystemTime())
  })

  it.each(matchesFixture)("should format matches correctly %#", (match) => {
    const message = formatMatchToEmbedField(match)

    expect(message).toMatchSnapshot()
  })
})

describe("notifier", () => {
  const responseFn = vi.fn<ResponseCreator>(() => ({
    status: 200,
    body: null,
  }))

  beforeEach(() => {
    server.post(`/channels/${CHANNEL_ID}/messages`, responseFn)
    // sendMessageMock = vi.fn(async () => Promise.resolve(null)) as never

    // mockedDiscord.createDiscordClient.mockReturnValue({
    //   sendMessage: sendMessageMock,
    // } as Partial<ReturnType<(typeof Discord)["createDiscordClient"]>>)
  })

  it("sends messages to channels", async () => {
    const now = Temporal.Now.instant()
    const matches: Match$[] = [
      {
        id: "1",
        matchType: "Bo2",
        teamOneId: "Team Liquid",
        teamTwoId: "Nigma Galaxy",
        startsAt: now.add({ hours: 3 }).round({ smallestUnit: "seconds" }).toString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "2",
        matchType: "Bo2",
        teamOneId: "Nigma Galaxy",
        teamTwoId: "OG",
        startsAt: now.add({ hours: 12 }).round({ smallestUnit: "seconds" }).toString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "3",
        matchType: "Bo2",
        teamOneId: "something",
        teamTwoId: "someone",
        startsAt: now.add({ hours: 4, minutes: 30 }).round({ smallestUnit: "seconds" }).toString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "4",
        matchType: "Bo2",
        teamOneId: "OG",
        teamTwoId: "Too Late To Be Included",
        startsAt: Temporal.Now.zonedDateTimeISO()
          .add({ days: 4 })
          .round({ smallestUnit: "seconds" })
          .toString(),
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

    server.assertAllRoutesCalled()

    const [request] = responseFn.mock.calls[0]
    const data = (await request.json()) as { embeds: APIEmbed[] }
    const embed = data.embeds[0]

    expect(JSON.stringify(embed.fields)).toContain("**Team Liquid** _vs_ **Nigma Galaxy**")
    expect(JSON.stringify(embed.fields)).not.toContain("Too Late To Be Included")

    expect(embed).toMatchSnapshot()
  })

  it("orders matches correctly", async () => {
    const now = Temporal.Now.instant()
    const matches: Match$[] = [
      {
        id: "3",
        matchType: "Bo2",
        teamOneId: "Team Liquid",
        teamTwoId: "OG",
        startsAt: now.add({ hours: 22 }).round({ smallestUnit: "seconds" }).toString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "1",
        matchType: "Bo2",
        teamOneId: "Team Liquid",
        teamTwoId: "OG",
        startsAt: now.add({ hours: 6 }).round({ smallestUnit: "seconds" }).toString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        id: "2",
        matchType: "Bo2",
        teamOneId: "Team Liquid",
        teamTwoId: "OG",
        startsAt: now.add({ hours: 12 }).round({ smallestUnit: "seconds" }).toString(),
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

    server.assertAllRoutesCalled()

    const [request] = responseFn.mock.calls[0]
    const data = (await request.json()) as { embeds: APIEmbed[] }
    const embed = data.embeds[0]

    expect(extractDateFromEmbedField(embed?.fields?.[0])).toEqual(
      Temporal.Instant.from(matches[1].startsAt!),
    )
    expect(extractDateFromEmbedField(embed?.fields?.[1])).toEqual(
      Temporal.Instant.from(matches[2].startsAt!),
    )
    expect(extractDateFromEmbedField(embed?.fields?.[2])).toEqual(
      Temporal.Instant.from(matches[0].startsAt!),
    )
  })
})
