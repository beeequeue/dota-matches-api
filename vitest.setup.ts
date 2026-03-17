import type { D1Migration } from "@cloudflare/vitest-pool-workers"
import type { D1Database } from "@cloudflare/workers-types/latest"
import { applyD1Migrations } from "cloudflare:test"
import { env } from "cloudflare:workers"

import { registerEnv } from "./src/db0-dialect/d1-register"

declare module "cloudflare:test" {
  interface ProvidedEnv extends Cloudflare.Env {
    MATCHES: D1Database
    FIXTURES: Fetcher
  }
}

declare const MIGRATIONS: D1Migration[]

await applyD1Migrations(env.MATCHES, MIGRATIONS)
registerEnv(env)
