import type { Subscription$, Team$ } from "./schema"

export const GUILD_ID = "987613986523"
export const CHANNEL_ID = "0986526095326812"

export const createSub = (teamName: string): Subscription$ => ({
  guildId: GUILD_ID,
  channel: CHANNEL_ID,
  teamName,
})

export const createTeam = (teamName: string): Team$ => ({
  id: teamName,
  name: teamName,
  url: "url",
})
