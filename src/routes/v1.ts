import { IHTTPMethods, Router } from "itty-router"

import { badRequest } from "@worker-tools/response-creators"

import { Dota } from "../dota"
import { json } from "../utils"

export const v1Router = Router<Request, IHTTPMethods>({ base: "/v1" })

const validIdsRegex = /^(?:\d+,?){0,5}\d+$/

v1Router.get("/matches", async (request, env: Env) => {
  const idsParam = new URL(request.url).searchParams.get("ids")
  if (idsParam == null || !validIdsRegex.test(idsParam)) {
    return badRequest("Missing or invalid ids parameter")
  }

  const ids = idsParam.split(",").filter(Boolean).map(Number)
  const data = await Dota.getTeamsData(env, ids)

  return json(data)
})
