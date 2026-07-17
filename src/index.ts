import { createApp } from "./app.ts"
import { registerEnv } from "./db0-dialect/d1-register"
import { notifier } from "./notify.ts"

const app = createApp()

export default {
  fetch: async (request, env, ctx) => {
    registerEnv(env)

    return app.fetch(request, env, ctx)
  },
  scheduled: notifier,
} satisfies ExportedHandler<Env>
