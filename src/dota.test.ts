import { env } from "cloudflare:test"
import { FetchMocker, MockServer } from "mentoss"
import { ms } from "milli"
import { Temporal } from "temporal-polyfill"
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest"

import { registerEnv } from "./db0-dialect/d1-register"
import { db } from "./db.ts"
import { getTeams, type LiquipediaBody } from "./dota.ts"
import { MetaKey } from "./utils.ts"

declare module "cloudflare:test" {
  interface ProvidedEnv extends Cloudflare.Env {
    FIXTURES: Fetcher
  }
}

describe("getTeams", async () => {
  const mockBody: LiquipediaBody = {
    parse: {
      text: {
        "*": await env.FIXTURES.fetch("http://localhost/teams.html").then(async (r) =>
          r.text(),
        ),
      },
    } as Partial<LiquipediaBody["parse"]> as LiquipediaBody["parse"],
  }
  const liquipediaMock = new MockServer("https://liquipedia.net")
  const mocker = new FetchMocker({ servers: [liquipediaMock] })

  beforeAll(() => mocker.mockGlobal())
  beforeEach(async () => {
    registerEnv(env)

    vi.resetAllMocks()
    vi.setSystemTime(
      Temporal.PlainDate.from("2020-01-01").toZonedDateTime("utc").epochMilliseconds,
    )

    mocker.clearAll()
    liquipediaMock.get("/dota2/api.php?*", { status: 200, body: mockBody })
  })

  it("fetches teams from api if not cached", async () => {
    const result = await getTeams(env)("test")

    // New values
    expect(result).toContain("OG")
    expect(result).toContain("Team Liquid")

    expect(liquipediaMock.uncalledRoutes).toHaveLength(0)

    const data = await db.selectFrom("team").selectAll().limit(1).execute()
    expect(data[0]).toStrictEqual({
      id: "1win Team",
      name: "1win Team",
      url: "https://liquipedia.net/dota2/1win_Team",
    })
  })

  it("fetches teams from cache if cached", async () => {
    await db.insertInto("team").values({ id: "OG", name: "OG", url: "url" }).execute()
    await env.META.put(MetaKey.TEAMS_LAST_FETCHED, (Date.now() - ms("10m")).toString())

    const result = await getTeams(env)("test")

    expect(liquipediaMock.uncalledRoutes).toHaveLength(1)

    // Cached values
    expect(result).toContain("OG")
    expect(result).not.toContain("Team Liquid")
  })

  it("fetches teams from cache and updates it if expired", async () => {
    await db.insertInto("team").values({ id: "OG", name: "OG", url: "url" }).execute()
    const l = (Date.now() - ms("6d")).toString()
    await env.META.put(MetaKey.TEAMS_LAST_FETCHED, l)

    const result = await getTeams(env)("test")

    expect(result).toContain("OG")
    expect(result).toContain("Team Liquid")

    // Still fetched new ones
    expect(liquipediaMock.uncalledRoutes).toHaveLength(0)
    const data = await db.selectFrom("team").selectAll().orderBy("team.name").execute()
    expect(data[33]).toStrictEqual({
      id: "Team Liquid",
      name: "Team Liquid",
      url: "https://liquipedia.net/dota2/Team_Liquid",
    })
  })
})
