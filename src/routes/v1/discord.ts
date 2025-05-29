import {
  type APIApplicationCommandInteractionDataStringOption,
  type APIChatInputApplicationCommandInteraction,
  type APIInteraction,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10"
import { verifyKey } from "discord-interactions"
import { Hono } from "hono"

import { createDb } from "../../db.ts"
import {
  handleAutocompleteCommand,
  handleFollowCommand,
  handleListCommand,
  handleUnfollowCommand,
} from "../../discord/commands.ts"
import { createDiscordClient } from "../../discord/index.ts"
import { badRequest } from "../../http-errors.ts"
import { getCountry } from "../../utils.ts"

export const discordRouter = new Hono<{ Bindings: Env }>()

discordRouter.get("/", (c) =>
  c.redirect(createDiscordClient(c).getAuthorizeUrl().toString(), 302),
)

if (import.meta.env.NODE_ENV !== "production") {
  discordRouter.get("/autocomplete/teams", async (c) => {
    return handleAutocompleteCommand(
      c,
      createDb(c.env),
      "main",
      c.req.query().query ?? "",
    )
  })
}

const isValidCallback = (params: URLSearchParams) =>
  params.has("code") && params.has("guild_id") && params.has("permissions")

discordRouter.get("/callback", async (c) => {
  const discordClient = createDiscordClient(c)
  const url = new URL(c.req.url)

  if (!isValidCallback(url.searchParams)) {
    throw badRequest("Missing or invalid callback parameters")
  }

  return discordClient.registerGuild({
    code: url.searchParams.get("code")!,
    guildId: url.searchParams.get("guild_id")!,
    permissions: url.searchParams.get("permissions")!,
  })
})

discordRouter.post("/interactions", async (c) => {
  const db = createDb(c.env)

  const body = await c.req.text()
  const signature = c.req.header("x-signature-ed25519")!
  const timestamp = c.req.header("x-signature-timestamp")!
  if (!(await verifyKey(body, signature, timestamp, c.env.DISCORD_PUBLIC_KEY))) {
    throw badRequest("Invalid c.req signature")
  }

  const parsedBody = JSON.parse(body) as APIInteraction
  const { type, data } = parsedBody

  if (type === InteractionType.Ping) {
    return c.json({ type: InteractionResponseType.Pong })
  }

  if (type === InteractionType.ApplicationCommandAutocomplete) {
    const country = getCountry(c.req)
    const { value } =
      data.options.find(
        (option): option is APIApplicationCommandInteractionDataStringOption =>
          option.type === 3 && option.focused === true,
      ) ?? {}

    if (value == null) throw badRequest()

    return handleAutocompleteCommand(c, db, country, value)
  }

  if (type === InteractionType.ApplicationCommand && data != null) {
    switch (data.name) {
      case "follow": {
        return handleFollowCommand(
          c,
          db,
          parsedBody as APIChatInputApplicationCommandInteraction,
        )
      }

      case "unfollow": {
        return handleUnfollowCommand(
          c,
          db,
          parsedBody as APIChatInputApplicationCommandInteraction,
        )
      }

      case "follows": {
        return handleListCommand(
          c,
          db,
          parsedBody as APIChatInputApplicationCommandInteraction,
        )
      }
    }

    throw badRequest("Invalid command")
  }

  return c.text("Ok")
})
