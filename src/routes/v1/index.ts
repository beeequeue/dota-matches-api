import { IHTTPMethods, Router } from "itty-router"

import { createDb } from "../../db"
import { createDotaClient } from "../../dota"
import { getCountry, json } from "../../utils"

import { discordRouter } from "./discord"

export const v1Router = Router<Request, IHTTPMethods>({ base: "/v1" })

v1Router.all("/discord/*", discordRouter.handle)

v1Router.get("/matches", async (request: Request, env: Env) => {
  const dota = createDotaClient(env, createDb(env))

  const country = getCountry(request)
  const data = await dota.getMatches(country)

  return json(data)
})
