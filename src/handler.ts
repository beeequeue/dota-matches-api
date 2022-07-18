/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */

import { badRequest } from "@worker-tools/response-creators"

import { Dota } from "./dota"
import { json } from "./utils"

export const handler: ExportedHandlerFetchHandler<Env> = async (request, env) => {
  const idsParam = new URL(request.url).searchParams.get("ids")
  if (idsParam == null) {
    return badRequest("Missing ids")
  }

  const ids = idsParam.split(",").map(Number)
  const data = await Dota.getTeamsData(env, ids)

  return json(data)
}
