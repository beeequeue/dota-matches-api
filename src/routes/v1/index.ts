import { IRequest, Router } from "itty-router"

import { ExecutionContext } from "@cloudflare/workers-types"

import { createDb } from "../../db"
import { createDotaClient } from "../../dota"
import {
  buildCacheResponse,
  EDGE_CACHE_TIMEOUT,
  getBrowserCacheTtl,
  getCountry,
  getTtl,
  json,
  MetaKey,
} from "../../utils"

import { discordRouter } from "./discord"

export const v1Router = Router<IRequest, [Env, ExecutionContext]>({
  base: "/v1",
})

v1Router.all("/discord/*", discordRouter.handle)

v1Router.get<IRequest, [Env, ExecutionContext]>("/matches", async (request, env, ctx) => {
  const cached = await caches.default.match(request.url)
  if (cached != null) {
    const lastFetched = Number((await env.META.get(MetaKey.MATCHES_LAST_FETCHED))!)

    return json(await cached.json(), {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(cached as any),
      headers: {
        ...cached.headers,
        "Cache-Control": `public, max-age=${getBrowserCacheTtl(
          getTtl(lastFetched, EDGE_CACHE_TIMEOUT),
        )}`,
      },
    })
  }

  const dota = createDotaClient(env, createDb(env))

  const country = getCountry(request)
  const { matches, lastFetched } = await dota.getMatches(country)

  ctx.waitUntil(
    caches.default
      .put(request.url, buildCacheResponse(matches, lastFetched))
      .catch((error: Error) => console.log(`Failed to cache response: ${error.message}`)),
  )

  return buildCacheResponse(matches, lastFetched)
})
