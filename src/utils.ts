import ms, { StringValue } from "ms"

import { RequestInitExStatus, ok } from "@worker-tools/response-creators"

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
