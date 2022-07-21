import { IHTTPMethods, Router } from "itty-router"

import { notFound, temporaryRedirect } from "@worker-tools/response-creators"

import { v1Router } from "./routes/v1"

const router = Router<Request, IHTTPMethods>()

router.routes.push(...v1Router.routes)

router.get("/", () => temporaryRedirect("https://github.com/BeeeQueue/dota-matches-api"))

router.all("*", () => notFound())

const worker: ExportedHandler<Env> = {
  fetch: router.handle,
}

export default worker
