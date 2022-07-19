import { IHTTPMethods, Router } from "itty-router"

import { notFound } from "@worker-tools/response-creators"

import { v1Router } from "./routes/v1"

const router = Router<Request, IHTTPMethods>()

router.routes.push(...v1Router.routes)

router.all("*", () => notFound())

const worker: ExportedHandler<Env> = {
  fetch: router.handle,
}

export default worker
