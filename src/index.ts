import { IHTTPMethods, Router } from "itty-router"

import { notFound, temporaryRedirect } from "@worker-tools/response-creators"

import { notifier } from "./notify"
import { v1Router } from "./routes/v1"

const router = Router<Request, IHTTPMethods>()

router.all("/v1/*", v1Router.handle)

router.get("/", () => temporaryRedirect("https://github.com/BeeeQueue/dota-matches-api"))

router.all("*", () => notFound())

const worker: ExportedHandler<Env> = {
  fetch: router.handle,
  scheduled: notifier,
}

export default worker
