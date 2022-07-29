import { addDays } from "date-fns"
import { MockAgent, setGlobalDispatcher } from "undici"
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest"

import { Guild } from "./discord"
import { CACHE_KEY, Match } from "./dota"
import matchesFixture from "./fixtures/matches.json"
import { encode } from "./msgpack"
import { formatMatchToMessageLine, notifier } from "./notify"

const GUILD_ID = "987613986523"
const CHANNEL_ID = "0986526095326812"

let agent = new MockAgent()

beforeEach(() => {
  agent = new MockAgent()
  agent.disableNetConnect()
  setGlobalDispatcher(agent)
})

describe.only("formatMatchToMessageLine", () => {
  beforeAll(() => {
    vi.setSystemTime(new Date("2022-07-31T14:00:00.000Z"))

    return () => vi.setSystemTime(vi.getRealSystemTime())
  })

  it.each(matchesFixture)("should format matches correctly %#", (match) => {
    const message = formatMatchToMessageLine(match as Match)

    expect(message).toMatchSnapshot()
  })
})

describe("notifier", () => {
  beforeEach(() => {
    const discordAgent = agent.get("https://discord.com")

    discordAgent.intercept({ path: "/api/v10/oauth2/token", method: "POST" }).reply(200, {
      access_token: "access_token",
      expires_in: 60,
    })

    discordAgent
      .intercept({ path: `/api/v10/channels/${CHANNEL_ID}/messages`, method: "POST" })
      .reply(200, {
        idunno: false,
      })
  })

  it.only("test", async () => {
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
        startsAt: addDays(now, 0.25).toISOString(),
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
        startsAt: addDays(now, 0.5).toISOString(),
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
        startsAt: addDays(now, 0.35).toISOString(),
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
        startsAt: addDays(now, 4).toISOString(),
        leagueName: null,
        streamUrl: null,
      },
    ]
    await env.CACHE.put(CACHE_KEY, JSON.stringify(matches))

    await env.WEBHOOKS.put(
      GUILD_ID,
      encode<Guild>({
        id: GUILD_ID,
        subscriptions: {
          [CHANNEL_ID]: ["Team Liquid", "OG"],
        },
      }),
    )

    const result = await notifier(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument
      {} as any,
      env,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument
      {} as any,
    )

    expect(result).toBeUndefined()
  })
})
