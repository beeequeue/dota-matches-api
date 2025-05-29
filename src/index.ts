import { createApp } from "./app.ts"
import { notifier } from "./notify.ts"

declare global {
  // eslint-disable-next-line no-var,vars-on-top
  var __env__: Env
}

const app = createApp()

const worker: ExportedHandler<Env> = {
  fetch: async (request, env, ctx) => {
    globalThis.__env__ = env

    return app.fetch(request, env, ctx)
  },
  scheduled: notifier,
}

export default worker
