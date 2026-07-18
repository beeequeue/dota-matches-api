import { HTTPError } from "h3"

export const badRequest = (message = "Bad request") =>
  new HTTPError(message, { status: 400 })
