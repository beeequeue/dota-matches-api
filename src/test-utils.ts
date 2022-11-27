import migrationSql from "../migrations/0000_init.sql?raw"

import { SubscriptionTable, TeamTable } from "./db"

export const GUILD_ID = "987613986523"
export const CHANNEL_ID = "0986526095326812"

export const initDb = async (env: Env) => {
  await env.__D1_BETA__MATCHES.batch(
    migrationSql
      .replace(/\n\s*/g, " ")
      .replace(/ {2,}/g, " ")
      .split(" CREATE ")
      .map((s, i) => env.__D1_BETA__MATCHES.prepare(`${i !== 0 ? "CREATE " : ""}${s}`)),
  )
}

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
