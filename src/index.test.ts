import { describe, expect, test } from "vitest"

import { hello } from "./handler"

describe("test", () => {
  test("test", () => {
    expect(hello).toBe("world")
  })
})
