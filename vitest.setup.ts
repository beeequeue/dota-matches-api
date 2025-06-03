import { applyD1Migrations, env } from "cloudflare:test"
import { D1Database } from "@cloudflare/workers-types/latest"
import type { D1Migration } from "@cloudflare/vitest-pool-workers/config"
import { registerEnv } from "./src/db0-dialect/d1-register"

declare module "cloudflare:test" {
  interface ProvidedEnv extends Cloudflare.Env {
    MATCHES: D1Database
  }
}

declare const MIGRATIONS: D1Migration[]

await applyD1Migrations(env.MATCHES, MIGRATIONS)
registerEnv(env)
