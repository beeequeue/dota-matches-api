import { mande } from "mande"
import { expect } from "vitest"

import type { Match } from "../src/dota.ts"

it("no field is missing from all matches", async () => {
  const matches = await mande(process.env.API_BASE!).get<Match[]>("/v1/matches", {
    headers: {
      "User-Agent": "github.com/BeeeQueue/dota-matches-api (e2e)",
    },
  })

  // Amount of times a field appears in a match
  const fieldAmounts: Record<string, number> = {}
  for (const match of matches) {
    for (const field of Object.keys(match)) {
      if (match[field as keyof typeof match] != null) {
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
