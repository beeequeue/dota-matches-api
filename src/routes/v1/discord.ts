import {
  APIApplicationCommandInteractionDataStringOption,
  APIChatInputApplicationCommandInteraction,
  APIInteraction,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10"
import { verifyKey } from "discord-interactions"
import { IHTTPMethods, Router } from "itty-router"

import { badRequest, ok, temporaryRedirect } from "@worker-tools/response-creators"

import { createDiscordClient } from "../../discord"
import {
  handleAutocompleteCommand,
  handleFollowCommand,
  handleListCommand,
  handleUnfollowCommand,
} from "../../discord/commands"
import { getCountry, json } from "../../utils"

export const discordRouter = Router<Request, IHTTPMethods>({ base: "/v1/discord" })

discordRouter.get("/", (_, env: Env) =>
  temporaryRedirect(createDiscordClient(env).getAuthorizeUrl()),
)

const isValidCallback = (params: URLSearchParams) =>
  params.has("code") && params.has("guild_id") && params.has("permissions")

discordRouter.get("/callback", async (request, env: Env) => {
  const discordClient = createDiscordClient(env)
  const url = new URL(request.url)

  if (!isValidCallback(url.searchParams)) {
    return badRequest("Missing or invalid callback parameters")
  }

  return discordClient.registerGuild({
    code: url.searchParams.get("code")!,
    guildId: url.searchParams.get("guild_id")!,
    permissions: url.searchParams.get("permissions")!,
  })
})

discordRouter.post("/interactions", async (request: Request, env: Env) => {
  const body = await request.text()
  const signature = request.headers.get("x-signature-ed25519")
  const timestamp = request.headers.get("x-signature-timestamp")
  if (!verifyKey(body, signature!, timestamp!, env.DISCORD_PUBLIC_KEY)) {
    return badRequest("Invalid request signature")
  }

  const parsedBody = JSON.parse(body) as APIInteraction
  const { type, data } = parsedBody

  if (type === InteractionType.Ping) {
    return json({ type: InteractionResponseType.Pong })
  }

  if (type === InteractionType.ApplicationCommandAutocomplete) {
    const country = getCountry(request)
    const { value } =
      data.options.find(
        (option): option is APIApplicationCommandInteractionDataStringOption =>
          option.type === 3 && option.focused === true,
      ) ?? {}

    if (value == null) return badRequest()

    return handleAutocompleteCommand(env, country, value)
  }

  if (type === InteractionType.ApplicationCommand && data != null) {
    switch (data.name) {
      case "follow": {
        return handleFollowCommand(
          env,
          parsedBody as APIChatInputApplicationCommandInteraction,
        )
      }

      case "unfollow": {
        return handleUnfollowCommand(
          env,
          parsedBody as APIChatInputApplicationCommandInteraction,
        )
      }

      case "follows": {
        return handleListCommand(
          env,
          parsedBody as APIChatInputApplicationCommandInteraction,
        )
      }
    }

    return badRequest("Invalid command")
  }

  return ok()
})
