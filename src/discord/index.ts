import {
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessageResult,
  RESTPostOAuth2AccessTokenResult,
  RESTPostOAuth2AccessTokenURLEncodedData,
  RESTPostOAuth2AccessTokenWithBotAndGuildsScopeResult,
  RESTPostOAuth2ClientCredentialsURLEncodedData,
  Routes,
} from "discord-api-types/v10"
import { mande } from "mande"

import { badRequest, ok } from "@worker-tools/response-creators"

import { encode } from "../msgpack"

const SCOPES = ["bot", "applications.commands"]
const TOKEN_CACHE_KEY = "discord-token"

const baseUrl = "https://discord.com/api/v10"
const userAgent = `dota-matches-api (https://github.com/beeequeue/dota-matches-api, ${GIT_SHA})`
const discordClient = mande(baseUrl, {
  responseAs: "json",
  headers: {
    "User-Agent": userAgent,
  },
})

const fetchToken = async (): Promise<RESTPostOAuth2AccessTokenResult> => {
  const body: RESTPostOAuth2ClientCredentialsURLEncodedData = {
    grant_type: "client_credentials",
    scope: SCOPES.join(" "),
  }
  const response = await fetch(`${baseUrl}${Routes.oauth2TokenExchange()}`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(`${DISCORD_CLIENT_ID}:${DISCORD_CLIENT_SECRET}`)}`,
      "User-Agent": userAgent,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body as Record<string, any>),
  })

  if (!response.ok) {
    console.error(response.body)
    throw response
  }

  return await response.json()
}

export const getToken = async (env: Env): Promise<string> => {
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
  /** New teams are added _first_ in the array, to make deduping easier later */
  subscriptions: Record<string, string[]> // channelId: teamName[]
}

type RegisterGuildOptions = {
  code: string
  guildId: string
  permissions: string
}

const registerGuild = async (
  env: Env,
  { code, guildId, permissions }: RegisterGuildOptions,
): Promise<Response> => {
  const urlEncodedBody: RESTPostOAuth2AccessTokenURLEncodedData = {
    grant_type: "authorization_code",
    client_id: DISCORD_CLIENT_ID,
    client_secret: DISCORD_CLIENT_SECRET,
    code,
  }
  const response = await fetch(`${baseUrl}${Routes.oauth2TokenExchange()}`, {
    method: "POST",
    headers: {
      "User-Agent": userAgent,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(urlEncodedBody as Record<string, any>),
  })

  if (!response.ok) {
    console.error({
      status: response.status,
      body: await response.json(),
    })
    throw response
  }

  const body: RESTPostOAuth2AccessTokenWithBotAndGuildsScopeResult = await response.json()
  const { access_token, expires_in, guild } = body

  if (permissions !== "34880") {
    console.log(`Got invalid permissions: ${permissions}\n${access_token}`)
    await Discord.leaveGuild(access_token, guildId)

    return badRequest("All the required permissions we're not given.")
  }

  const guildRegistration: Guild = {
    id: guild.id,
    subscriptions: {},
    vanityUrlCode: guild.vanity_url_code ?? null,
  }
  await env.WEBHOOKS.put(guildId, encode(guildRegistration))
  await env.CACHE.put(TOKEN_CACHE_KEY, access_token, {
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

  return new URL(`${baseUrl}${Routes.oauth2Authorization()}?${searchParams.toString()}`)
}

const leaveGuild = async (env: Env, guildId: string) => {
  const token = await getToken(env)

  console.log(`Leaving guild ${guildId}`)
  return discordClient.delete(Routes.userGuild(guildId), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

const sendMessage = async (token: string, channelId: string, content: string) => {
  console.log(`Sending message to ${channelId}`)

  const body: RESTPostAPIChannelMessageJSONBody = {
    content,
  }
  return discordClient.post<RESTPostAPIChannelMessageResult>(
    Routes.channelMessages(channelId),
    {
      body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
}

export const Discord = {
  getAuthorizeUrl,
  registerGuild,
  leaveGuild,
  sendMessage,
}
