import { createApp } from "./app"
import { notifier } from "./notify"

const app = createApp()

const worker: ExportedHandler<Env> = {
  ...app,
  scheduled: notifier,
}

export default worker
