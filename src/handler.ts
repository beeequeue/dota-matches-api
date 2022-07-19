/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */

import { badRequest } from "@worker-tools/response-creators"

import { Dota } from "./dota"
import { json } from "./utils"

const validIdsRegex = /^(?:\d+,?){0,5}\d+$/

export const handler: ExportedHandlerFetchHandler<Env> = async (request, env) => {
  const idsParam = new URL(request.url).searchParams.get("ids")
  if (idsParam == null || !validIdsRegex.test(idsParam)) {
    return badRequest("Missing or invalid ids parameter")
  }

  const ids = idsParam.split(",").filter(Boolean).map(Number)
  const data = await Dota.getTeamsData(env, ids)

  return json(data)
}
