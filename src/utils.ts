import ms, { StringValue } from "ms"

import { RequestInitExStatus, ok } from "@worker-tools/response-creators"

export enum MetaKey {
  MATCHES_FRESH = "MATCHES_FRESH",
  TEAMS_LAST_FETCHED = "TEAMS_LAST_FETCHED",
}

export const nowSeconds = () => Math.round(Date.now() / 1000)

export const seconds = (input: StringValue) => Math.round(ms(input) / 1000)

export const json = <T = unknown>(data: T, init: RequestInitExStatus = {}) =>
  ok(JSON.stringify(data, null, 2), {
    headers: {
      ...init.headers,
      "Content-Type": "application/json",
    },
    ...init,
  })

export const getCountry = (request: Request) => {
  if (request.cf != null && "country" in request.cf) {
    return request.cf.country
  }

  return "UNKNOWN"
}
