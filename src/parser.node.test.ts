// @vitest-environment node
import { describe, expect, it } from "vitest"

import teamsPageFixture from "./fixtures/matches.html?raw"
import { parseMatchesPage } from "./parser"

describe("parseMatchesPage", () => {
  it("correctly parses the body", async () => {
    const withoutHashes = parseMatchesPage(teamsPageFixture).map(
      ({ hash, ...rest }) => rest,
    )

    expect(withoutHashes).toMatchSnapshot()
  })
})
