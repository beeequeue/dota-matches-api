import { serve } from "h3"

import { createApp } from "./app.ts"
import { notifier } from "./notify.ts"

if (!("Temporal" in globalThis)) {
  await import("temporal-polyfill-lite/global")
}

export default {
  ...serve(createApp(), {
    trustProxy: true,
  }),
  scheduled: notifier,
} satisfies ExportedHandler<Env>
