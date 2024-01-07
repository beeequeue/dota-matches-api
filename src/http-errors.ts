import { HTTPException } from "hono/http-exception"

export const badRequest = (message = "Bad request") => new HTTPException(400, { message })
