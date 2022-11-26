import { setTimeout } from "timers/promises"

import ms from "ms"
import { beforeEach, expect, it, vi } from "vitest"

import { createDb, Db } from "./db"
import { getTeams, LiquipediaBody, parseTeamsPage } from "./dota"
import teamsFixture from "./fixtures/teams.html?raw"
import { initDb } from "./test-utils"
import { MetaKey } from "./utils"

const describe = setupMiniflareIsolatedStorage()
const agent = getMiniflareFetchMock()

describe("parseTeamsPage", () => {
  it("correctly parses the body", () => {
    const result = parseTeamsPage(teamsFixture)

    expect(result).toBeDefined()
    expect(result).toMatchSnapshot()
  })
})

describe("getTeams", () => {
  let env: Env
  let db: Db

  beforeEach(async () => {
    vi.resetAllMocks()

    vi.setSystemTime(new Date("2020-01-01"))

    agent.disableNetConnect()
    agent.assertNoPendingInterceptors()

    env = getMiniflareBindings()
    db = createDb(env)
    await initDb(env)
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
    const apiHandler = mockApiRequest()

    const result = await getTeams(env, db)("test")

    // New values
    expect(result).toContain("OG")
    expect(result).toContain("Team Liquid")

    expect(apiHandler).toHaveBeenCalledOnce()

    const data = await db.selectFrom("team").selectAll().execute()
    expect(data[0]).toStrictEqual({
      id: "5ManMidas",
      name: "5ManMidas",
      url: "https://liquipedia.net/dota2/5ManMidas",
    })
  })

  it("fetches teams from cache if cached", async () => {
    await db.insertInto("team").values({ id: "OG", name: "OG", url: "url" }).execute()
    await env.META.put(MetaKey.TEAMS_LAST_FETCHED, (Date.now() - ms("10m")).toString())

    const result = await getTeams(env, db)("test")

    // Cached values
    expect(result).toContain("OG")
    expect(result).not.toContain("Team Liquid")
  })

  it("fetches teams from cache and updates it if soft expired", async () => {
    const apiHandler = mockApiRequest()

    await db.insertInto("team").values({ id: "OG", name: "OG", url: "url" }).execute()
    const l = (Date.now() - ms("6d")).toString()
    await env.META.put(MetaKey.TEAMS_LAST_FETCHED, l)

    const result = await getTeams(env, db)("test")

    // Cached values
    expect(result).toContain("OG")
    expect(result).not.toContain("Team Liquid")

    await setTimeout(100)
    // Still fetched new ones
    expect(apiHandler).toHaveBeenCalledOnce()
    const data = await db.selectFrom("team").selectAll().orderBy("name").execute()
    expect(data[0]).toStrictEqual({
      id: "5ManMidas",
      name: "5ManMidas",
      url: "https://liquipedia.net/dota2/5ManMidas",
    })
  })
})
