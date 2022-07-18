import { ok } from "@worker-tools/response-creators"
import { RequestInitExStatus } from "@worker-tools/response-creators/src"

export const isNotNil = <T>(value: T | null | undefined): value is T => value == null

export const isNil = <T>(value: T | null | undefined): value is null | undefined =>
  !isNotNil(value)

export const json = (data: unknown, init: RequestInitExStatus = {}) =>
  ok(JSON.stringify(data, null, 2), {
    headers: {
      ...init.headers,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "Content-Type": "application/json",
    },
    ...init,
  })
