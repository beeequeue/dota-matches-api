import { describe, expect, it } from "vitest"

import { discordRouter } from "./discord"

describe("POST /callback", () => {
  it("returns 400 on missing parameters", async () => {
    const params = new URLSearchParams({})
    const url = new URL(`https://localhost:8787/v1/discord/callback?${params.toString()}`)
    const request = new Request(url.toString())

    const response = await discordRouter.handle(request, getMiniflareBindings())
  })

  it("registers new guild", () => {
    expect("hello").toBe("world")
  })
})
