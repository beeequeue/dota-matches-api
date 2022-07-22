import { mande } from "mande"
import { encode } from "msgpackr/pack"

import { badRequest, ok } from "@worker-tools/response-creators"

const SCOPES = ["bot", "applications.commands"]
const TOKEN_CACHE_KEY = "discord-token"

const discordClient = mande("https://discord.com/api", {
  responseAs: "json",
  headers: {
    "User-Agent": `dota-matches-api (https://github.com/beeequeue/dota-matches-api, ${GIT_SHA})`,
  },
})

const fetchToken = async (): Promise<{ access_token: string; expires_in: number }> => {
  const response = await fetch("https://discord.com/api/v10/oauth2/token", {
    method: "POST",
    headers: {
      "User-Agent": `dota-matches-api (https://github.com/beeequeue/dota-matches-api, ${GIT_SHA})`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: DISCORD_CLIENT_ID,
      client_secret: DISCORD_CLIENT_SECRET,
      scopes: SCOPES.join(" "),
    }),
  })

  if (!response.ok) {
    console.error(response.body)
    throw response
  }

  return await response.json()
}

const getToken = async (env: Env): Promise<string> => {
  const cached = await env.CACHE.get(TOKEN_CACHE_KEY)
  if (cached != null) {
    return cached
  }

  const { access_token, expires_in } = await fetchToken()

  await env.CACHE.put(TOKEN_CACHE_KEY, access_token, {
    expirationTtl: expires_in,
  })

  return access_token
}

export type Guild = {
  id: string
  vanityUrlCode?: unknown
  subscriptions: Array<{ channelId: string; teams: string[] }>
}

type RegisterGuildOptions = {
  code: string
  guildId: string
  permissions: string
}

type TokenResponse = {
  access_token: string
  refresh_token: string
  expires_in: number
  guild: {
    id: string
    vanityUrlCode?: unknown
  }
}

const registerGuild = async (
  env: Env,
  { code, guildId, permissions }: RegisterGuildOptions,
): Promise<Response> => {
  const response = await fetch("https://discord.com/api/v10/oauth2/token", {
    method: "POST",
    headers: {
      "User-Agent": `dota-matches-api (https://github.com/beeequeue/dota-matches-api, ${GIT_SHA})`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: DISCORD_CLIENT_ID,
      client_secret: DISCORD_CLIENT_SECRET,
      code,
    }),
  })

  if (!response.ok) {
    console.error(response.body)
    throw response
  }

  const { access_token, expires_in, guild }: TokenResponse = await response.json()

  if (permissions !== "34880") {
    console.log(`Got invalid permissions: ${permissions}\n${access_token}`)
    await Discord.leaveGuild(access_token, guildId)

    return badRequest("All the required permissions we're not given.")
  }

  const guildRegistration: Guild = {
    id: guild.id,
    vanityUrlCode: guild.vanityUrlCode,
    subscriptions: [],
  }
  await env.WEBHOOKS.put(guildId, encode(guildRegistration) as ArrayBuffer)
  await env.CACHE.put(guildId, access_token, {
    expirationTtl: expires_in,
  })

  return ok()
}

const getAuthorizeUrl = () => {
  /* eslint-disable @typescript-eslint/naming-convention */
  const searchParams = new URLSearchParams({
    response_type: "code",
    client_id: DISCORD_CLIENT_ID,
    scope: SCOPES.join(" "),
    permissions: "34880",
  })

  return new URL(`https://discord.com/api/oauth2/authorize?${searchParams.toString()}`)
}

const leaveGuild = (token: string, guildId: string) => {
  console.log(`Leaving guild ${guildId}`)
  return discordClient.delete(`/v10/users/@me/guilds@${guildId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const Discord = { getAuthorizeUrl, registerGuild, leaveGuild }
