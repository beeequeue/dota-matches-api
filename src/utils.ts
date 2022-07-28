import { RequestInitExStatus, ok } from "@worker-tools/response-creators"

export const json = (data: unknown, init: RequestInitExStatus = {}) =>
  ok(JSON.stringify(data, null, 2), {
    headers: {
      ...init.headers,
      "Content-Type": "application/json",
    },
    ...init,
  })
