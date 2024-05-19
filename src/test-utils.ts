import type { DrizzleD1Database } from "drizzle-orm/d1"
import type { MockAgent } from "undici-types"

import type { $subscriptions, $teams } from "./schema"

declare module "vitest" {
  interface TestContext {
    agent: MockAgent
    env: Env
    db: DrizzleD1Database
  }
}

export const GUILD_ID = "987613986523"
export const CHANNEL_ID = "0986526095326812"

export const createSub = (teamName: string): typeof $subscriptions.$inferSelect => ({
  guildId: GUILD_ID,
  channel: CHANNEL_ID,
  teamName,
})

export const createTeam = (teamName: string): typeof $teams.$inferSelect => ({
  id: teamName,
  name: teamName,
  url: "url",
})
