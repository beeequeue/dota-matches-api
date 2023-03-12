import { createCors } from "itty-cors"
import { Router } from "itty-router"

import {
  notFound,
  temporaryRedirect,
  internalServerError,
} from "@worker-tools/response-creators"

import { notifier } from "./notify"
import { v1Router } from "./routes/v1"
import { CustomRouter } from "./types"

const router = Router() as CustomRouter

const { preflight, corsify } = createCors({
  methods: ["GET"],
  origins: ["*"],
  maxAge: 7200,
})

router.all("*", preflight as any)

router.all("/v1/*", v1Router.handle)

router.get("/", () => temporaryRedirect("https://github.com/BeeeQueue/dota-matches-api"))

router.all("*", () => notFound())

const worker: ExportedHandler<Env> = {
  fetch: (...args) =>
    router
      .handle(...args)
      .catch((error: Error) => {
        console.error(error)
        return internalServerError("Something went wrong!")
      })
      .then(corsify),
  scheduled: notifier,
}

export default worker
