import { OAuth2Scopes, Routes, ThreadAutoArchiveDuration } from "discord-api-types/v10"
import type {
  APIEmbed,
  RESTOAuth2AuthorizationQuery,
  RESTOAuth2BotAuthorizationQuery,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessageResult,
  RESTPostAPIChannelThreadsJSONBody,
  RESTPostAPIChannelThreadsResult,
  RESTPostOAuth2AccessTokenURLEncodedData,
} from "discord-api-types/v10"
import type { EventHandlerResponse } from "h3"
import { Xior } from "xior"

import { badRequest } from "../http-errors.ts"

const SCOPES = `${OAuth2Scopes.Bot} ${OAuth2Scopes.ApplicationsCommands}` as const
export const BOT_PERMISSIONS = "309237647360"

const baseUrl = "https://discord.com/api/v10"
const userAgent = `dota-matches-api (https://github.com/beeequeue/dota-matches-api)`
const discordClient = new Xior({
  baseURL: baseUrl,
  responseType: "json",
  headers: {
    "User-Agent": userAgent,
  },
})

type RegisterGuildOptions = {
  code: string
  guildId: string
  permissions: string
}

const registerGuild =
  (env: Env) =>
  async ({ code, guildId, permissions }: RegisterGuildOptions): Promise<EventHandlerResponse> => {
    const urlEncodedBody = {
      grant_type: "authorization_code",
      client_id: env.DISCORD_CLIENT_ID,
      client_secret: env.DISCORD_CLIENT_SECRET,
      code,
      redirect_uri: getRedirectUri(env),
    } satisfies RESTPostOAuth2AccessTokenURLEncodedData
    const response = await fetch(`${baseUrl}${Routes.oauth2TokenExchange()}`, {
      method: "POST",
      headers: {
        "User-Agent": userAgent,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(urlEncodedBody),
    })

    if (!response.ok) {
      console.error({
        status: response.status,
        body: await response.json(),
      })
      throw new Error("Failed to exchange code for token", { cause: response })
    }

    if (permissions !== BOT_PERMISSIONS) {
      console.log(`Got invalid permissions: ${permissions}`)
      await leaveGuild(env, guildId)

      throw badRequest("All the required permissions were not given.")
    }

    return "Ok"
  }

const getRedirectUri = (env: Env) => `${env.API_BASE}/v1/discord/callback`

const getAuthorizeUrl = (env: Env) => () => {
  const query = {
    response_type: "code",
    client_id: env.DISCORD_CLIENT_ID,
    scope: SCOPES,
    permissions: BOT_PERMISSIONS,
    redirect_uri: getRedirectUri(env),
  } satisfies RESTOAuth2AuthorizationQuery & RESTOAuth2BotAuthorizationQuery
  const searchParams = new URLSearchParams(query)

  return new URL(`${baseUrl}${Routes.oauth2Authorization()}?${searchParams.toString()}`)
}

const leaveGuild = async (env: Env, guildId: string) => {
  console.log(`Leaving guild ${guildId}`)

  try {
    return await discordClient.delete(Routes.userGuild(guildId), {
      headers: {
        Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
      },
    })
  } catch (error) {
    throw new Error("Failed to leave guild", { cause: error })
  }
}

const createThread = (env: Env) => async (channelId: string) => {
  console.log(`Creating thread in ${channelId}`)

  const now = Temporal.Now.plainTimeISO().toString()
  const body: RESTPostAPIChannelThreadsJSONBody = {
    type: 11, // public thread
    name: `Match Schedule ${now}`,
    auto_archive_duration: ThreadAutoArchiveDuration.OneDay,
  }

  try {
    return await discordClient.post<RESTPostAPIChannelThreadsResult>(
      Routes.threads(channelId),
      body,
      {
        headers: {
          Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
        },
      },
    )
  } catch (error) {
    throw new Error("Failed to create a thread", { cause: error })
  }
}

const sendMessage = (env: Env) => async (parentId: string, content: string | APIEmbed) => {
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
    return await discordClient.post<RESTPostAPIChannelMessageResult>(
      Routes.channelMessages(parentId),
      body,
      {
        headers: {
          Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
        },
      },
    )
  } catch (error) {
    throw new Error("Failed to send message", { cause: error })
  }
}

export const createDiscordClient = (env: Env) => ({
  getAuthorizeUrl: getAuthorizeUrl(env),
  registerGuild: registerGuild(env),
  createThread: createThread(env),
  sendMessage: sendMessage(env),
  leaveGuild,
})
