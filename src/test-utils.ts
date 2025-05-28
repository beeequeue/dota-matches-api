import type { $subscriptions, $teams } from "./schema.ts"

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
