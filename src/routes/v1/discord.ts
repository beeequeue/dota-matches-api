import { InteractionResponseType, InteractionType, verifyKey } from "discord-interactions"
import { IHTTPMethods, Router } from "itty-router"

import { badRequest, ok, temporaryRedirect } from "@worker-tools/response-creators"

import { Discord } from "../../discord"
import {
  handleFollowCommand,
  handleListCommand,
  InteractionsBody,
} from "../../discord/commands"
import { json } from "../../utils"

export const discordRouter = Router<Request, IHTTPMethods>({ base: "/v1/discord" })

discordRouter.get("/", () => temporaryRedirect(Discord.getAuthorizeUrl()))

discordRouter.post("/interactions", async (request: Request, env: Env) => {
  const body = await request.text()
  const signature = request.headers.get("x-signature-ed25519")
  const timestamp = request.headers.get("x-signature-timestamp")
  if (!verifyKey(body, signature!, timestamp!, DISCORD_PUBLIC_KEY)) {
    return badRequest("Invalid request signature")
  }

  const parsedBody = JSON.parse(body) as InteractionsBody
  const { type, data } = parsedBody

  if (type === InteractionType.PING) {
    return json({ type: InteractionResponseType.PONG })
  }

  if (type === InteractionType.APPLICATION_COMMAND && data != null) {
    switch (data.name) {
      case "follow":
        return handleFollowCommand(env, parsedBody)

      case "unfollow":
        return ok()

      case "follows":
        return handleListCommand(env, parsedBody)
    }

    return badRequest("Invalid command")
  }

  return ok()
})

const isValidCallback = (params: URLSearchParams) =>
  params.has("code") && params.has("guild_id") && params.has("permissions")

discordRouter.get("/callback", async (request, env: Env) => {
  const url = new URL(request.url)

  if (!isValidCallback(url.searchParams)) {
    return badRequest("Missing or invalid callback parameters")
  }

  return Discord.registerGuild(env, {
    code: url.searchParams.get("code")!,
    guildId: url.searchParams.get("guild_id")!,
    permissions: url.searchParams.get("permissions")!,
  })
})
