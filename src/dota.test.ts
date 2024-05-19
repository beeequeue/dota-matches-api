import { setTimeout } from "timers/promises"

import { ms } from "milli"
import { beforeEach, expect, it, TestContext, vi } from "vitest"

import { getTeams, LiquipediaBody, parseTeamsPage } from "./dota"
import teamsFixture from "./fixtures/teams.html?raw"
import { MetaKey } from "./utils"

const describe = setupMiniflareIsolatedStorage()

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
  const mockApiRequest = (ctx: TestContext) => {
    const handler = vi.fn(() => body)

    ctx.agent
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

    const data = await ctx.db.selectFrom("team").selectAll().execute()
    expect(data[0]).toStrictEqual({
      id: "5ManMidas",
      name: "5ManMidas",
      url: "https://liquipedia.net/dota2/5ManMidas",
    })
  })

  it("fetches teams from cache if cached", async (ctx) => {
    await ctx.db.insertInto("team").values({ id: "OG", name: "OG", url: "url" }).execute()
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
    const apiHandler = mockApiRequest(ctx)

    await ctx.db.insertInto("team").values({ id: "OG", name: "OG", url: "url" }).execute()
    const l = (Date.now() - ms("6d")).toString()
    await ctx.env.META.put(MetaKey.TEAMS_LAST_FETCHED, l)

    const result = await getTeams(ctx.env, ctx.db)("test")

    // Cached values
    expect(result).toContain("OG")
    expect(result).not.toContain("Team Liquid")

    await setTimeout(100)
    // Still fetched new ones
    expect(apiHandler).toHaveBeenCalledOnce()
    const data = await ctx.db.selectFrom("team").selectAll().orderBy("name").execute()
    expect(data[0]).toStrictEqual({
      id: "5ManMidas",
      name: "5ManMidas",
      url: "https://liquipedia.net/dota2/5ManMidas",
    })
  })
})
