import {
  type APIApplicationCommandInteractionDataStringOption,
  type APIChatInputApplicationCommandInteraction,
  type APIInteraction,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10"
import { verifyKey } from "discord-interactions"
import { getQuery, H3, redirect } from "h3"

import {
  handleAutocompleteCommand,
  handleFollowCommand,
  handleListCommand,
  handleUnfollowCommand,
} from "../../discord/commands.ts"
import { createDiscordClient } from "../../discord/index.ts"
import { badRequest } from "../../http-errors.ts"
import { getCountry, getEnv } from "../../utils.ts"

export const discordRouter = new H3()

discordRouter.get("/", (event) =>
  redirect(createDiscordClient(getEnv(event)).getAuthorizeUrl().toString(), 302),
)

if (process.env.NODE_ENV !== "production") {
  discordRouter.get("/autocomplete/teams", async (event) => {
    const query = getQuery(event)
    return handleAutocompleteCommand(event, "main", query.query ?? "")
  })
}

const isValidCallback = (params: URLSearchParams) =>
  params.has("code") && params.has("guild_id") && params.has("permissions")

discordRouter.get("/callback", async (event) => {
  const discordClient = createDiscordClient(getEnv(event))
  const url = new URL(event.req.url)

  if (!isValidCallback(url.searchParams)) {
    throw badRequest("Missing or invalid callback parameters")
  }

  return discordClient.registerGuild({
    code: url.searchParams.get("code")!,
    guildId: url.searchParams.get("guild_id")!,
    permissions: url.searchParams.get("permissions")!,
  })
})

discordRouter.post("/interactions", async (event) => {
  const body = await event.req.text()
  const signature = event.req.headers.get("x-signature-ed25519")!
  const timestamp = event.req.headers.get("x-signature-timestamp")!
  if (!(await verifyKey(body, signature, timestamp, getEnv(event).DISCORD_PUBLIC_KEY))) {
    throw badRequest("Invalid c.req signature")
  }

  const parsedBody = JSON.parse(body) as APIInteraction
  const { type, data } = parsedBody

  if (type === InteractionType.Ping) {
    return { type: InteractionResponseType.Pong }
  }

  if (type === InteractionType.ApplicationCommandAutocomplete) {
    const country = getCountry(event)
    const { value } =
      data.options.find(
        (option): option is APIApplicationCommandInteractionDataStringOption =>
          option.type === 3 && option.focused === true,
      ) ?? {}

    if (value == null) throw badRequest()

    return handleAutocompleteCommand(event, country, value)
  }

  if (type === InteractionType.ApplicationCommand && data != null) {
    switch (data.name) {
      case "follow": {
        return handleFollowCommand(parsedBody as APIChatInputApplicationCommandInteraction)
      }

      case "unfollow": {
        return handleUnfollowCommand(parsedBody as APIChatInputApplicationCommandInteraction)
      }

      case "follows": {
        return handleListCommand(parsedBody as APIChatInputApplicationCommandInteraction)
      }
    }

    throw badRequest("Invalid command")
  }

  return "Ok"
})
