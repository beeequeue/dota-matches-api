import { addHours } from "date-fns"
import { APIEmbedField } from "discord-api-types/payloads/v10/channel"
import { RESTPostAPIChannelMessageJSONBody } from "discord-api-types/v10"
import { MockAgent, setGlobalDispatcher } from "undici"
import type { MockInterceptor } from "undici/types/mock-interceptor"
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest"

import { Guild } from "./discord"
import { MATCHES_CACHE_KEY, Match } from "./dota"
import matchesFixture from "./fixtures/matches.json"
import { encode } from "./msgpack"
import { formatMatchToEmbedField, notifier } from "./notify"

const GUILD_ID = "987613986523"
const CHANNEL_ID = "0986526095326812"

const extractDateFromEmbedField = (field: APIEmbedField | undefined) => {
  if (field == null) return null

  const [, value] = /@<t:(\d+):t>/.exec(field.value) ?? []
  if (value == null) return null

  return new Date(Number(value) * 1000)
}

let agent = new MockAgent()

beforeEach(() => {
  vi.restoreAllMocks()
  vi.setSystemTime(new Date("2020-01-01"))

  agent = new MockAgent()
  agent.disableNetConnect()
  setGlobalDispatcher(agent)
})

afterAll(() => {
  vi.setSystemTime(vi.getRealSystemTime())
})

describe("formatMatchToEmbedField", () => {
  beforeAll(() => {
    vi.setSystemTime(new Date("2022-07-31T14:00:00.000Z"))

    return () => vi.setSystemTime(vi.getRealSystemTime())
  })

  it.each(matchesFixture)("should format matches correctly %#", (match) => {
    const message = formatMatchToEmbedField(match as Match)

    expect(message).toMatchSnapshot()
  })
})

describe("notifier", () => {
  const mock200 = vi.fn(() => ({
    statusCode: 200,
    data: { id: "id" },
  }))

  beforeEach(() => {
    const discordAgent = agent.get("https://discord.com")

    discordAgent.intercept({ path: "/api/v10/oauth2/token", method: "POST" }).reply(200, {
      access_token: "access_token",
      expires_in: 60,
    })

    discordAgent
      .intercept({ path: `/api/v10/channels/${CHANNEL_ID}/messages`, method: "POST" })
      .reply(mock200)
  })

  it("sends messages to channels", async () => {
    const env = (await miniflare.getBindings()) as Env

    const now = new Date()
    const matches: Match[] = [
      {
        hash: "1",
        matchType: "Bo2",
        teams: [
          { name: "Team Liquid", url: "url" },
          { name: "Nigma Galaxy", url: "url" },
        ],
        startsAt: addHours(now, 3).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        hash: "2",
        matchType: "Bo2",
        teams: [
          { name: "Nigma Galaxy", url: "url" },
          { name: "OG", url: "url" },
        ],
        startsAt: addHours(now, 12).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        hash: "3",
        matchType: "Bo2",
        teams: [
          { name: "something", url: "url" },
          { name: "someone", url: "url" },
        ],
        startsAt: addHours(now, 4.5).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        hash: "4",
        matchType: "Bo2",
        teams: [
          { name: "OG", url: "url" },
          { name: "someone", url: "url" },
        ],
        startsAt: addHours(now, 24 * 4).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
    ]
    await env.CACHE.put(MATCHES_CACHE_KEY, JSON.stringify(matches))

    await env.WEBHOOKS.put(
      GUILD_ID,
      encode<Guild>({
        id: GUILD_ID,
        subscriptions: {
          [CHANNEL_ID]: ["Team Liquid", "OG"],
        },
      }),
    )

    await notifier({} as never, env, {} as never)

    expect(mock200).toHaveBeenCalledOnce()
    const [request] = mock200.mock.calls[0] as unknown as [
      MockInterceptor.MockResponseCallbackOptions,
    ]
    expect(request.method).toMatchInlineSnapshot('"POST"')
    expect(request.path).toMatchInlineSnapshot(
      '"/api/v10/channels/0986526095326812/messages"',
    )
    expect(JSON.parse(request.body as string)).toMatchSnapshot()
  })

  it("orders matches correctly", async () => {
    const env = (await miniflare.getBindings()) as Env

    const now = new Date()
    const matches: Match[] = [
      {
        hash: "3",
        matchType: "Bo2",
        teams: [
          { name: "Team Liquid", url: "url" },
          { name: "OG", url: "url" },
        ],
        startsAt: addHours(now, 22).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        hash: "1",
        matchType: "Bo2",
        teams: [
          { name: "Team Liquid", url: "url" },
          { name: "OG", url: "url" },
        ],
        startsAt: addHours(now, 6).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
      {
        hash: "2",
        matchType: "Bo2",
        teams: [
          { name: "Team Liquid", url: "url" },
          { name: "OG", url: "url" },
        ],
        startsAt: addHours(now, 12).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
    ]
    await env.CACHE.put(MATCHES_CACHE_KEY, JSON.stringify(matches))

    await env.WEBHOOKS.put(
      GUILD_ID,
      encode<Guild>({
        id: GUILD_ID,
        subscriptions: {
          [CHANNEL_ID]: ["Team Liquid", "OG"],
        },
      }),
    )

    await notifier({} as never, env, {} as never)

    expect(mock200).toHaveBeenCalledOnce()

    const [request] = mock200.mock.calls[0] as unknown as [
      MockInterceptor.MockResponseCallbackOptions,
    ]
    const body = JSON.parse(request.body as string) as RESTPostAPIChannelMessageJSONBody

    // expect(body.embeds?.[0]?.fields).toStrictEqual("rich")
    expect(extractDateFromEmbedField(body.embeds?.[0]?.fields?.[0])).toStrictEqual(
      new Date(matches[1].startsAt!),
    )
    expect(extractDateFromEmbedField(body.embeds?.[0]?.fields?.[1])).toStrictEqual(
      new Date(matches[2].startsAt!),
    )
    expect(extractDateFromEmbedField(body.embeds?.[0]?.fields?.[2])).toStrictEqual(
      new Date(matches[0].startsAt!),
    )
  })
})
