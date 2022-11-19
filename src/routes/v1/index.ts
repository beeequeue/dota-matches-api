import { IHTTPMethods, Router } from "itty-router"

import { Dota } from "../../dota"
import { getCountry, json } from "../../utils"

import { discordRouter } from "./discord"

export const v1Router = Router<Request, IHTTPMethods>({ base: "/v1" })

v1Router.all("/discord/*", discordRouter.handle)

v1Router.get("/matches", async (request: Request, env: Env) => {
  const country = getCountry(request)
  const data = await Dota.getMatches(env, country)

  return json(data)
})
