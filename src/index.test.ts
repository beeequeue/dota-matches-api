import { describe, expect, test } from "vitest"

describe.skip("test", () => {
  test("test", () => {
    expect("hello").toBe("world")
  })
})
