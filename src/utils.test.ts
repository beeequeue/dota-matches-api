import { addSeconds } from "date-fns"
import { beforeAll, describe, expect, it, vi } from "vitest"

import { getTtl } from "./utils"

describe("getTtl", () => {
  beforeAll(() => {
    vi.setSystemTime(new Date("2022-02-02 12:00"))
  })

  it("should return 0", () => {
    // Fetched 10 seconds ago
    const fetchedAt = addSeconds(new Date(), -10).getTime()

    // Should expire 10 seconds after `fetchedAt`
    expect(getTtl(fetchedAt, 10)).toBe(0)
  })

  it("should return 30", () => {
    // Fetched 0 seconds ago
    const fetchedAt = Date.now()

    // Should expire 30 seconds after `fetchedAt`
    expect(getTtl(fetchedAt, 30)).toBe(30)
  })

  it("should return 0 because it expired", () => {
    // Fetched 20 seconds ago
    const fetchedAt = addSeconds(new Date(), -20).getTime()

    // Should expire 10 seconds after `fetchedAt`
    expect(getTtl(fetchedAt, 10)).toBe(0)
  })
})
