// import { createDatabase } from "db0"
// import sqlite from "db0/connectors/cloudflare-d1"
import { chunk, pick } from "es-toolkit"
import { Kysely } from "kysely"
import { D1Dialect } from "kysely-d1"

import type { Match, Team } from "./dota.ts"
import type { League$, Match$, Tables, Team$ } from "./schema.ts"

// export const db0 = createDatabase(sqlite({ bindingName: "MATCHES" }))
export const db = new Kysely<Tables>({
  dialect: new D1Dialect({ database: globalThis.__env__.MATCHES }),
})

const teamsQuery = db.selectFrom("teams").select(["name", "url"]).compile()
export const getTeamsFromDb = async () => {
  return db.executeQuery(teamsQuery)
}

export const upsertTeamsData = async (teams: Team[]) => {
  return Promise.all(
    teams.map(({ name, url }) =>
      db
        .insertInto("teams")
        .values({ id: name!, name: name!, url })
        .onConflict((c) => c.column("id").doUpdateSet({ name: name!, url: url! })),
    ),
  )
}

const matchDataQuery = db
  .selectFrom("matches")
  .innerJoin("leagues", "matches.leagueName", "leagues.name")
  .innerJoin("teams as teamOne", "matches.teamOneId", "teamOne.id")
  .innerJoin("teams as teamTwo", "matches.teamTwoId", "teamTwo.id")
  .select([
    "matches.id as id",
    "matches.matchType as matchType",
    "matches.streamUrl as streamUrl",
    "matches.startsAt as startsAt",
    "matches.leagueName as leagueName",
    "leagues.url as leagueUrl",

    "teamOne.id as teamOneId",
    "teamOne.name as teamOneName",
    "teamOne.url as teamOneUrl",

    "teamTwo.id as teamTwoId",
    "teamTwo.name as teamTwoName",
    "teamTwo.url as teamTwoUrl",
  ])
  .compile()

export const getMatchDataFromDb = async (): Promise<Match[]> => {
  const result = await db.executeQuery(matchDataQuery)

  return result.rows.map((match) => ({
    hash: match.id,
    ...pick(match, ["matchType", "streamUrl", "startsAt", "leagueName", "leagueUrl"]),
    teams: [
      { name: match.teamOneName, url: match.teamOneUrl },
      { name: match.teamTwoName, url: match.teamTwoUrl },
    ],
  }))
}

export const upsertMatchData = async (matches: Match[]) => {
  console.log("Upserting match data...")

  console.log("Generating new data...")
  const matchData = matches.map<Match$>((match) => ({
    id: match.hash,
    matchType: match.matchType,
    teamOneId: match.teams[0]?.name ?? null,
    teamTwoId: match.teams[1]?.name ?? null,
    leagueName: match.leagueName,
    streamUrl: match.streamUrl,
    startsAt: match.startsAt,
  }))

  const teams = new Map<string, Team$>()
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

  const leagues = new Map<string, League$>()
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
  await db.deleteFrom("matches").execute()

  console.log("Inserting matches...")
  await Promise.all(
    // For some reason this is erroring with "too many SQL variables" if we don't chunk it
    chunk(matchData, 20).map((matchChunk) => db.insertInto("matches").values(matchChunk)),
  )

  console.log("Inserting teams...")
  await Promise.all(
    [...teams.values()].map((team) =>
      db
        .insertInto("teams")
        .values(team)
        .onConflict((c) => c.column("id").doUpdateSet(team)),
    ),
  )

  console.log("Inserting leagues...")
  await Promise.all(
    [...leagues.values()].map((league) =>
      db
        .insertInto("leagues")
        .values(league)
        .onConflict((c) => c.column("name").doUpdateSet(league)),
    ),
  )
}
