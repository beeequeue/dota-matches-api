import assert from "node:assert/strict"

import { env } from "cloudflare:test"
import { Temporal } from "temporal-polyfill"
import { beforeAll, describe, expect, it, vi } from "vitest"

import { parseTeamsPage } from "./dota.ts"
import { getTtl } from "./utils.ts"

describe("parseTeamsPage", () => {
  it("correctly parses the body", async () => {
    const result = parseTeamsPage(
      await env.FIXTURES.fetch("http://localhost/teams.html").then(async (r) => r.text()),
    )

    expect(result).toBeDefined()
    expect(result).toMatchSnapshot()
  })
})

describe("getTtl", () => {
  beforeAll(() => {
    vi.setSystemTime(new Date("2022-02-02 12:00"))
  })

  it("should return 0", () => {
    // Fetched 10 seconds ago
    const fetchedAt = Temporal.Now.instant().add({ seconds: -10 }).epochMilliseconds

    // Should expire 10 seconds after `fetchedAt`
    assert.equal(getTtl(fetchedAt, 10), 0)
  })

  it("should return 30", () => {
    // Fetched 0 seconds ago
    const fetchedAt = Date.now()

    // Should expire 30 seconds after `fetchedAt`
    assert.equal(getTtl(fetchedAt, 30), 30)
  })

  it("should return 0 because it expired", () => {
    // Fetched 20 seconds ago
    const fetchedAt = Temporal.Now.instant().add({ seconds: -20 }).epochMilliseconds

    // Should expire 10 seconds after `fetchedAt`
    assert.equal(getTtl(fetchedAt, 10), 0)
  })
})
