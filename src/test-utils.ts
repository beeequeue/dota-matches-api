import type { MockAgent } from "undici"

import type { Db, SubscriptionTable, TeamTable } from "./db"

declare module "vitest" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface TestContext {
    agent: MockAgent
    env: Env
    db: Db
  }
}

export const GUILD_ID = "987613986523"
export const CHANNEL_ID = "0986526095326812"

export const createSub = (teamName: string): SubscriptionTable => ({
  guildId: GUILD_ID,
  channel: CHANNEL_ID,
  teamName,
})

export const createTeam = (teamName: string): TeamTable => ({
  id: teamName,
  name: teamName,
  url: "url",
})
