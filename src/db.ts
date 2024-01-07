import { eq, sql } from "drizzle-orm"
import { drizzle, DrizzleD1Database } from "drizzle-orm/d1"
import { alias } from "drizzle-orm/sqlite-core"
import { chunk, pick } from "remeda"

import type { Match, Team } from "./dota"
import { $leagues, $matches, $teams } from "./schema"

export const createDb = (env: Env) => drizzle(env.MATCHES)

export const getTeamsFromDb = async (db: DrizzleD1Database): Promise<Team[]> => {
  return await db.select({ name: $teams.name, url: $teams.url }).from($teams)
}

export const upsertTeamsData = async (db: DrizzleD1Database, teams: Team[]) => {
  return await Promise.all(
    teams.map(({ name, url }) =>
      db
        .insert($teams)
        .values({ id: name!, name: name!, url })
        .onConflictDoUpdate({ target: $teams.id, set: { name: name!, url: url! } }),
    ),
  )
}

export const getMatchDataFromDb = async (db: DrizzleD1Database): Promise<Match[]> => {
  const $teamOne = alias($teams, "teamOne")
  const $teamTwo = alias($teams, "teamTwo")

  const matchData = await db
    .select({
      id: $matches.id,
      matchType: $matches.matchType,
      streamUrl: $matches.streamUrl,
      startsAt: $matches.startsAt,
      leagueName: $matches.leagueName,
      leagueUrl: $leagues.url,

      teamOneId: $matches.teamOneId,
      // https://github.com/drizzle-team/drizzle-orm/issues/555
      // https://github.com/cloudflare/workerd/pull/696
      teamOneName: sql<string>`${$teamOne.name}`.as("teamOneName"),
      teamOneUrl: sql<string>`${$teamOne.url}`.as("teamOneUrl"),

      teamTwoId: $matches.teamTwoId,
      // https://github.com/drizzle-team/drizzle-orm/issues/555
      // https://github.com/cloudflare/workerd/pull/696
      teamTwoName: sql<string>`${$teamTwo.name}`.as("teamTwoName"),
      teamTwoUrl: sql<string>`${$teamTwo.url}`.as("teamTwoUrl"),
    })
    .from($matches)
    .leftJoin($leagues, eq($matches.leagueName, $leagues.name))
    .leftJoin($teamOne, eq($matches.teamOneId, $teamOne.id))
    .leftJoin($teamTwo, eq($matches.teamTwoId, $teamTwo.id))
    .all()

  return matchData.map((match) => ({
    hash: match.id,
    ...pick(match, ["matchType", "streamUrl", "startsAt", "leagueName", "leagueUrl"]),
    teams: [
      { name: match.teamOneName, url: match.teamOneUrl },
      { name: match.teamTwoName, url: match.teamTwoUrl },
    ],
  }))
}

export const upsertMatchData = async (db: DrizzleD1Database, matches: Match[]) => {
  console.log("Upserting match data...")

  console.log("Generating new data...")
  const matchData = matches.map<typeof $matches.$inferInsert>((match) => ({
    id: match.hash,
    matchType: match.matchType,
    teamOneId: match.teams[0]?.name ?? null,
    teamTwoId: match.teams[1]?.name ?? null,
    leagueName: match.leagueName,
    streamUrl: match.streamUrl,
    startsAt: match.startsAt,
  }))

  const teams = new Map<string, typeof $teams.$inferInsert>()
  for (const match of matches) {
    if (match.teams[0]?.name != null && !teams.has(match.teams[0].name)) {
      teams.set(match.teams[0].name, {
        id: match.teams[0].name,
        name: match.teams[0].name,
        url: match.teams[0].url,
      })
    }
    if (match.teams[1]?.name != null && !teams.has(match.teams[1].name)) {
      teams.set(match.teams[1].name, {
        id: match.teams[1].name,
        name: match.teams[1].name,
        url: match.teams[1].url,
      })
    }
  }

  const leagues = new Map<string, typeof $leagues.$inferInsert>()
  for (const match of matches) {
    if (match.leagueName == null || leagues.has(match.leagueName)) continue

    leagues.set(match.leagueName, {
      name: match.leagueName,
      url: match.leagueUrl,
    })
  }

  if (matchData.length === 0) {
    return console.log("Found no matches on Liquipedia.")
  }

  console.log("Deleting old matches...")
  await db.delete($matches)

  console.log("Inserting matches...")
  await Promise.all(
    // For some reason this is erroring with "too many SQL variables" if we don't chunk it
    chunk(matchData, 5).map((matchChunk) => db.insert($matches).values(matchChunk)),
  )

  console.log("Inserting teams...")
  await Promise.all(
    [...teams.values()].map((team) =>
      db.insert($teams).values(team).onConflictDoUpdate({ target: $teams.id, set: team }),
    ),
  )

  console.log("Inserting leagues...")
  await Promise.all(
    [...leagues.values()].map((league) =>
      db
        .insert($leagues)
        .values(league)
        .onConflictDoUpdate({ target: $leagues.name, set: league }),
    ),
  )
}
