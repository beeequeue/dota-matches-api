import { mande } from "mande"
import { keys } from "remeda"
import { expect, test } from "vitest"

import type { Match } from "../src/dota"

test("no field is missing from all matches", async () => {
  const matches = await mande(process.env.API_BASE!).get<Match[]>("/v1/matches", {
    headers: {
      "User-Agent": "github.com/BeeeQueue/dota-matches-api (e2e)",
    },
  })

  // Amount of times a field appears in a match
  const fieldAmounts: Record<string, number> = {}
  for (const match of matches) {
    for (const field of keys.strict(match)) {
      if (match[field] != null) {
        fieldAmounts[field] ??= 0
        fieldAmounts[field]++
      }
    }
  }

  for (const field in fieldAmounts) {
    expect(
      fieldAmounts[field],
      `Expected '${field}' to exist for all matches`,
    ).toBeGreaterThan(0)
  }
})
