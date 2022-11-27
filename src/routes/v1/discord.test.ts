import { describe, expect, it } from "vitest"

import type { Guild } from "../../discord"
import { BOT_PERMISSIONS } from "../../discord"
import { decode } from "../../msgpack"

import { discordRouter } from "./discord"

describe.skip("POST /api/discord/callback", () => {
  it("returns 400 on missing parameters", async () => {
    const params = new URLSearchParams({})
    const url = new URL(`https://localhost:8787/v1/discord/callback?${params.toString()}`)
    const request = new Request(url.toString())

    const response: Response = await discordRouter.handle(
      request,
      miniflare.getBindings(),
    )

    expect(response).toMatchObject({
      status: 400,
    })
  })

  it("returns 200 and saves guild data", async () => {
    agent
      .get("https://discord.com")
      .intercept({ path: "/api/v10/oauth2/token", method: "POST" })
      .reply(200, {
        access_token: "access_token",
        expires_in: 60,
        guild: {
          id: GUILD_ID,
        },
      })

    const bindings = (await miniflare.getBindings()) as Env
    await bindings.CACHE.put("test", "true")

    const params = new URLSearchParams({
      code: "123456",
      guild_id: GUILD_ID,
      permissions: BOT_PERMISSIONS,
    })
    const url = new URL(`https://localhost:8787/v1/discord/callback?${params.toString()}`)
    const request = new Request(url.toString())

    const response: Response = await discordRouter.handle(
      request,
      await miniflare.getBindings(),
    )

    const newObject = await bindings.WEBHOOKS.get(GUILD_ID)
    expect(newObject).toBeDefined()

    const guild = await decode<Guild>(newObject!)
    expect(guild).toStrictEqual({
      id: GUILD_ID,
      subscriptions: {},
      vanityUrlCode: null,
    })

    expect(response).toMatchObject({
      status: 200,
    })
  })
})
