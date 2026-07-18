import { createApp } from "./app.ts"
import { registerEnv } from "./db0-dialect/d1-register"
import { notifier } from "./notify.ts"

if (!("Temporal" in globalThis)) {
  await import("temporal-polyfill-lite/global")
}

const app = createApp()

export default {
  fetch: async (request, env) => {
    registerEnv(env)

    return app.fetch(request)
  },
  scheduled: notifier,
} satisfies ExportedHandler<Env>
