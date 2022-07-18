import { handler } from "./handler"

const worker: ExportedHandler<Env> = {
  fetch: handler,
}

export default worker
