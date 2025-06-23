import { SELF } from "cloudflare:test"
import { FetchMocker, MockServer } from "mentoss"
import { describe, expect, it } from "vitest"

import { BOT_PERMISSIONS } from "../../discord/index.ts"
import { GUILD_ID } from "../../test-utils.ts"

describe("pOST /api/discord/callback", () => {
  it("returns 400 on missing parameters", async () => {
    const params = new URLSearchParams({})
    const url = new URL(`https://localhost:8787/v1/discord/callback?${params.toString()}`)
    const request = new Request(url.toString())
    const response = await SELF.fetch(request)

    expect(response.status).toBe(400)
  })

  it("returns 200 and saves guild data", async () => {
    const server = new MockServer("https://discord.com")
    server.post("//api/v10/oauth2/token", {
      status: 200,
      body: {
        access_token: "access_token",
        expires_in: 60,
        guild: {
          id: GUILD_ID,
        },
      },
    })
    const mocker = new FetchMocker({ servers: [server] })
    mocker.mockGlobal()

    const params = new URLSearchParams({
      code: "123456",
      guild_id: GUILD_ID,
      permissions: BOT_PERMISSIONS,
    })
    const url = new URL(`https://localhost:8787/v1/discord/callback?${params.toString()}`)
    const request = new Request(url.toString())
    const response = await SELF.fetch(request)

    expect(response.status).toBe(200)
  })
})
