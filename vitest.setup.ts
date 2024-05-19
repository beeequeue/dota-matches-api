// @ts-expect-error: stupid
import { createExecutionContext, env, fetchMock } from "cloudflare:test"
import type { DrizzleD1Database } from "drizzle-orm/d1"
import { beforeAll, beforeEach } from "vitest"

import { createDb } from "./src/db"

declare module "vitest" {
  interface TestContext {
    cf: ExecutionContext
    env: Env
    db: DrizzleD1Database
  }
}

beforeAll(() => {
  fetchMock.activate()
  fetchMock.disableNetConnect()
})

beforeEach((ctx) => {
  ctx.cf = createExecutionContext()
  ctx.env = env as Env
  ctx.db = createDb(ctx.env)
})

