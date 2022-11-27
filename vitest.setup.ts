import { beforeEach } from "vitest"

import { createDb } from "./src/db"

beforeEach((ctx) => {
  ctx.agent = getMiniflareFetchMock()
  ctx.env = getMiniflareBindings()
  ctx.db = createDb(ctx.env)

  ctx.agent.disableNetConnect()
})
