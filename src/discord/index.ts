import { format } from "date-fns"
import {
  APIEmbed,
  OAuth2Scopes,
  RESTOAuth2AuthorizationQuery,
  RESTOAuth2BotAuthorizationQuery,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessageResult,
  RESTPostAPIChannelThreadsJSONBody,
  RESTPostAPIChannelThreadsResult,
  RESTPostOAuth2AccessTokenURLEncodedData,
  RESTPostOAuth2AccessTokenWithBotAndGuildsScopeResult,
  Routes,
  ThreadAutoArchiveDuration,
} from "discord-api-types/v10"
import { mande, MandeError } from "mande"

import { badRequest, ok } from "@worker-tools/response-creators"

import { encode } from "../msgpack"

const SCOPES = `${OAuth2Scopes.Bot} ${OAuth2Scopes.ApplicationsCommands}` as const
const BOT_PERMISSIONS = "309237647360"
const TOKEN_CACHE_KEY = "discord-token"

const baseUrl = "https://discord.com/api/v10"
const userAgent = `dota-matches-api (https://github.com/beeequeue/dota-matches-api, ${GIT_SHA})`
const discordClient = mande(baseUrl, {
  responseAs: "json",
  headers: {
    "User-Agent": userAgent,
  },
})

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

const registerGuild =
  (env: Env) =>
  async ({ code, guildId, permissions }: RegisterGuildOptions): Promise<Response> => {
    const urlEncodedBody: RESTPostOAuth2AccessTokenURLEncodedData = {
      grant_type: "authorization_code",
      client_id: env.DISCORD_CLIENT_ID,
      client_secret: env.DISCORD_CLIENT_SECRET,
      code,
      redirect_uri: getRedirectUri(env),
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

    const body: RESTPostOAuth2AccessTokenWithBotAndGuildsScopeResult =
      await response.json()
    const { access_token, expires_in, guild } = body

    if (permissions !== BOT_PERMISSIONS) {
      console.log(`Got invalid permissions: ${permissions}`)
      await leaveGuild(env, guildId)

      return badRequest("All the required permissions were not given.")
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

const getRedirectUri = (env: Env) => `${env.API_BASE}/v1/discord/callback`

const getAuthorizeUrl = (env: Env) => () => {
  const query: RESTOAuth2AuthorizationQuery & RESTOAuth2BotAuthorizationQuery = {
    response_type: "code",
    client_id: env.DISCORD_CLIENT_ID,
    scope: SCOPES,
    permissions: BOT_PERMISSIONS,
    redirect_uri: getRedirectUri(env),
  }
  const searchParams = new URLSearchParams(query as Record<string, any>)

  return new URL(`${baseUrl}${Routes.oauth2Authorization()}?${searchParams.toString()}`)
}

const leaveGuild = async (env: Env, guildId: string) => {
  console.log(`Leaving guild ${guildId}`)

  try {
    return discordClient.delete(Routes.userGuild(guildId), {
      headers: {
        Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
      },
    })
  } catch (error) {
    throw new Error("Failed to leave guild", { cause: error as MandeError })
  }
}

const createThread = (env: Env) => async (channelId: string) => {
  console.log(`Creating thread in ${channelId}`)

  const body: RESTPostAPIChannelThreadsJSONBody = {
    type: 11, // public thread
    name: `Match Schedule ${format(new Date(), "MMM ddd")}`,
    auto_archive_duration: ThreadAutoArchiveDuration.OneDay,
  }

  try {
    return discordClient.post<RESTPostAPIChannelThreadsResult>(
      Routes.threads(channelId),
      body,
      {
        headers: {
          Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
        },
      },
    )
  } catch (error) {
    throw new Error("Failed to create a thread", { cause: error as MandeError })
  }
}

const sendMessage =
  (env: Env) => async (parentId: string, content: string | APIEmbed) => {
    console.log(`Sending message to ${parentId}`)

    const body: RESTPostAPIChannelMessageJSONBody =
      typeof content === "string"
        ? {
            content,
          }
        : {
            embeds: [content],
          }

    try {
      return discordClient.post<RESTPostAPIChannelMessageResult>(
        Routes.channelMessages(parentId),
        body,
        {
          headers: {
            Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
          },
        },
      )
    } catch (error) {
      throw new Error("Failed to send message", { cause: error as MandeError })
    }
  }

export const createDiscordClient = (env: Env) => ({
  getAuthorizeUrl: getAuthorizeUrl(env),
  registerGuild: registerGuild(env),
  createThread: createThread(env),
  sendMessage: sendMessage(env),
  leaveGuild,
})
