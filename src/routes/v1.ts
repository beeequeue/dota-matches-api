import { IHTTPMethods, Router } from "itty-router"

import { Dota } from "../dota"
import { json } from "../utils"

export const v1Router = Router<Request, IHTTPMethods>({ base: "/v1" })

v1Router.get("/matches", async (_request, env: Env) => {
  const data = await Dota.getMatches(env)

  return json(data)
})
