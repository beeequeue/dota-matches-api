import { handler } from "./handler"

const worker: ExportedHandler = {
  fetch: handler,
}

export default worker
