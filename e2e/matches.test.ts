import xior from "xior"
import { expect, it } from "vitest"

import type { Match } from "../src/dota.ts"

it("no field is missing from all matches", async () => {
  const response = await xior.get<Match[]>(`${process.env.API_BASE!}/v1/matches`, {
    headers: {
      "User-Agent": "github.com/BeeeQueue/dota-matches-api (e2e)",
    },
  })
  if (response.data.length < 3) return

  // Amount of times a field appears in a match
  const fieldAmounts: Record<string, number> = {}
  for (const match of response.data) {
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
