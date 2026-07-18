import { H3, handleCors, redirect } from "h3"

import { registerEnv } from "./db0-dialect/d1-register"
import { v1Router } from "./routes/v1/index.ts"
import { getEnv } from "./utils"

export const createApp = () => {
  const app = new H3()

  let isRegistered = false
  app.use((event) => {
    if (isRegistered) return
    registerEnv(getEnv(event))
    isRegistered = true
  })

  app.all("/", (event) => {
    const result = handleCors(event, {
      origin: "*",
      methods: ["GET"],
      credentials: false,
      preflight: { statusCode: 204 },
    })
    if (result !== false) return result
  })

  app.mount("/v1", v1Router)

  app.get("/", () => redirect("https://github.com/BeeeQueue/dota-matches-api", 302))

  return app
}
