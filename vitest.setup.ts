import { beforeEach } from "vitest"

import { createDb } from "./src/db"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
beforeEach((ctx: any) => {
  ctx.agent = getMiniflareFetchMock()
  ctx.env = getMiniflareBindings()
  ctx.db = createDb(ctx.env)

  ctx.agent.disableNetConnect()
})
