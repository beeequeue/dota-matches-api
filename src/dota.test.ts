import { ms } from "milli"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { fetchMock } from "cloudflare:test"
import { type LiquipediaBody, getTeams, parseTeamsPage } from "./dota"
// @ts-expect-error: Bad type
import teamsFixture from "./fixtures/teams.html?raw"
import { MetaKey } from "./utils"
import { $teams } from "./schema"

describe("parseTeamsPage", () => {
  it("correctly parses the body", () => {
    const result = parseTeamsPage(teamsFixture)

    expect(result).toBeDefined()
    expect(result).toMatchSnapshot()
  })
})

describe("getTeams", () => {
  beforeEach(() => {
    vi.resetAllMocks()

    vi.setSystemTime(new Date("2020-01-01"))
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

    fetchMock
      .get("https://liquipedia.net")
      .intercept({
        path: /dota2.api\.php/,
        method: "GET",
      })
      .reply(200, handler)

    return handler
  }

  it("fetches teams from api if not cached", async (ctx) => {
    const apiHandler = mockApiRequest(ctx)

    const result = await getTeams(ctx.env, ctx.db)("test")

    // New values
    expect(result).toContain("OG")
    expect(result).toContain("Team Liquid")

    expect(apiHandler).toHaveBeenCalledOnce()

    const data = await ctx.db.select().from($teams).all()
    expect(data[0]).toStrictEqual({
      id: "5ManMidas",
      name: "5ManMidas",
      url: "https://liquipedia.net/dota2/5ManMidas",
    })
  })

  it("fetches teams from cache if cached", async (ctx) => {
    await ctx.db.insert($teams).values({ id: "OG", name: "OG", url: "url" }).execute()
    await ctx.env.META.put(
      MetaKey.TEAMS_LAST_FETCHED,
      (Date.now() - ms("10m")).toString(),
    )

    const result = await getTeams(ctx.env, ctx.db)("test")

    // Cached values
    expect(result).toContain("OG")
    expect(result).not.toContain("Team Liquid")
  })

  it("fetches teams from cache and updates it if soft expired", async (ctx) => {
    const apiHandler = mockApiRequest()

    await ctx.db.insert($teams).values({ id: "OG", name: "OG", url: "url" }).execute()
    const l = (Date.now() - ms("6d")).toString()
    await ctx.env.META.put(MetaKey.TEAMS_LAST_FETCHED, l)

    const result = await getTeams(ctx.env, ctx.db)("test")

    // Cached values
    expect(result).toContain("OG")
    expect(result).not.toContain("Team Liquid")

    await new Promise((resolve) => setTimeout(resolve, 100))
    // Still fetched new ones
    expect(apiHandler).toHaveBeenCalledOnce()
    const data = await ctx.db.select().from($teams).orderBy($teams.name).execute()
    expect(data[0]).toStrictEqual({
      id: "5ManMidas",
      name: "5ManMidas",
      url: "https://liquipedia.net/dota2/5ManMidas",
    })
  })
})
