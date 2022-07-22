/* eslint-disable @typescript-eslint/naming-convention */
import { IHTTPMethods, Router } from "itty-router"

import { badRequest, temporaryRedirect } from "@worker-tools/response-creators"

import { Discord } from "../discord"
import { Dota } from "../dota"
import { json } from "../utils"

export const v1Router = Router<Request, IHTTPMethods>({ base: "/v1" })

v1Router.get("/matches", async (request: Request, env: Env) => {
  const country = request.cf?.country ?? "UNKNOWN"
  const data = await Dota.getMatches(env, country)

  return json(data)
})

v1Router.get("/discord", () => temporaryRedirect(Discord.getAuthorizeUrl()))

const isValidCallback = (params: URLSearchParams) =>
  params.has("code") && params.has("guild_id") && params.has("permissions")

v1Router.get("/callback/discord", async (request, env: Env) => {
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
