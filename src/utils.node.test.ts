import assert from "node:assert/strict"

import { beforeAll, describe, it, vi } from "vitest"

import { getTtl } from "./utils.ts"

describe("getTtl", () => {
  beforeAll(() => {
    vi.setSystemTime(
      Temporal.PlainDateTime.from("2022-02-02 12:00").toZonedDateTime("utc").epochMilliseconds,
    )
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
