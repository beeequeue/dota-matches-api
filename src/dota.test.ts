import { setTimeout } from "timers/promises"

import ms from "ms"
import { MockAgent, setGlobalDispatcher } from "undici"
import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  getTeams,
  LiquipediaBody,
  parseTeamsPage,
  SoftExpire,
  TEAMS_CACHE_KEY,
} from "./dota"
import teamsFixture from "./fixtures/teams.html?raw"
import { nowSeconds, seconds } from "./utils"

describe("parseTeamsPage", () => {
  it("correctly parses the body", () => {
    const result = parseTeamsPage(teamsFixture)

    expect(result).toBeDefined()
    expect(result).toMatchSnapshot()
  })
})

describe("getTeams", () => {
  let agent = new MockAgent()

  beforeEach(() => {
    vi.restoreAllMocks()
    vi.setSystemTime(new Date("2020-01-01"))

    agent = new MockAgent()
    agent.disableNetConnect()
    setGlobalDispatcher(agent)
  })

  const body: LiquipediaBody = {
    parse: {
      text: {
        "*": teamsFixture,
      },
    } as Partial<LiquipediaBody["parse"]> as LiquipediaBody["parse"],
  }
  const mockApiRequest = () => {
    const handler = vi.fn(() => body)

    agent
      .get("https://liquipedia.net")
      .intercept({
        path: /dota2.api\.php/,
        method: "GET",
      })
      .reply(200, handler)

    return handler
  }

  it("fetches teams from api if not cached", async () => {
    const env = (await miniflare.getBindings()) as Env
    const apiHandler = mockApiRequest()

    const result = await getTeams(env, "test")

    // New values
    expect(result).toContain("OG")
    expect(result).toContain("Team Liquid")

    expect(apiHandler).toHaveBeenCalledOnce()
    await expect(env.CACHE.get(TEAMS_CACHE_KEY)).resolves.toContain("OG")
  })

  it("fetches teams from cache if cached", async () => {
    const env = (await miniflare.getBindings()) as Env
    const apiHandler = mockApiRequest()

    await env.CACHE.put(TEAMS_CACHE_KEY, '["OG"]', {
      expirationTtl: seconds("1 day"),
      metadata: {
        softExpires: nowSeconds() + seconds("3 hours"),
      } as SoftExpire,
    })

    const result = await getTeams(env, "test")

    // Cached values
    expect(result).toContain("OG")
    expect(result).not.toContain("Team Liquid")

    expect(apiHandler).not.toHaveBeenCalledOnce()
  })

  it("fetches teams from cache and updates it if soft expired", async () => {
    const env = (await miniflare.getBindings()) as Env
    const apiHandler = mockApiRequest()

    await env.CACHE.put(TEAMS_CACHE_KEY, '["OG"]', {
      expirationTtl: seconds("1 day"),
      metadata: {
        softExpires: nowSeconds() + seconds("3 hours"),
      } as SoftExpire,
    })

    vi.setSystemTime(Date.now() + ms("5 hours"))

    const result = await getTeams(env, "test")

    // Cached values
    expect(result).toContain("OG")
    expect(result).not.toContain("Team Liquid")

    // Still fetched new ones
    expect(apiHandler).toHaveBeenCalledOnce()
    await setTimeout(250)
    await expect(env.CACHE.get(TEAMS_CACHE_KEY)).resolves.toContain("Team Liquid")
  })
})
