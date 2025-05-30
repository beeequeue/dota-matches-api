import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { before, describe, it, mock } from "node:test"

import { addSeconds } from "date-fns"

import { parseTeamsPage } from "./dota.ts"
import { getTtl } from "./utils.ts"

describe("parseTeamsPage", () => {
  it("correctly parses the body", (t) => {
    const result = parseTeamsPage(readFileSync("./src/fixtures/teams.html", "utf-8"))

    assert.notEqual(result, null)

    assert.equal(result.length, 87)
    assert.deepStrictEqual(result[0], {
      name: "5ManMidas",
      url: "https://liquipedia.net/dota2/5ManMidas",
    })
    t.assert.snapshot(result)
  })
})

describe("getTtl", () => {
  before(() => {
    mock.timers.enable({ apis: ["Date"], now: new Date("2022-02-02 12:00") })
  })

  it("should return 0", () => {
    // Fetched 10 seconds ago
    const fetchedAt = addSeconds(new Date(), -10).getTime()

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
    const fetchedAt = addSeconds(new Date(), -20).getTime()

    // Should expire 10 seconds after `fetchedAt`
    assert.equal(getTtl(fetchedAt, 10), 0)
  })
})
