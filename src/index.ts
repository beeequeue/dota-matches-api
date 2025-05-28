import { createApp } from "./app.ts"
import { notifier } from "./notify.ts"

const app = createApp()

const worker: ExportedHandler<Env> = {
  ...app,
  scheduled: notifier,
}

export default worker
