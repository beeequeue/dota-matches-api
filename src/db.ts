import { InsertObject, Kysely } from "kysely"
import { D1Dialect } from "kysely-d1"
import { pick } from "remeda"

import type { Match, Team } from "./dota"

export type MatchTable = {
  id: string
  matchType: string | null
  teamOneId: string | null
  teamTwoId: string | null
  leagueName: string | null
  streamUrl: string | null
  startsAt: string | null
}

export type LeagueTable = {
  name: string
  url: string | null
}

export type TeamTable = {
  id: string
  name: string
  url: string | null
}

type Database = {
  match: MatchTable
  league: LeagueTable
  team: TeamTable
}

export type Db = Kysely<Database>

export const createDb = (env: Env) =>
  new Kysely<Database>({
    dialect: new D1Dialect({ database: env.__D1_BETA__MATCHES }),
  })

export const getTeamsFromDb = async (db: Db): Promise<Team[]> => {
  return await db.selectFrom("team").select(["name", "url"]).execute()
}

export const upsertTeamsData = async (db: Db, teams: Team[]) => {
  return await Promise.all(
    [...teams.values()].map(({ name, url }) =>
      db
        .insertInto("team")
        .values({ id: name!, name: name!, url })
        .onConflict((b) => b.column("id").doUpdateSet({ id: name!, name: name!, url }))
        .execute(),
    ),
  )
}

export const getMatchDataFromDb = async (db: Db): Promise<Match[]> => {
  const matchData = await db
    .selectFrom("match")
    .leftJoin("league", "match.leagueName", "league.name")
    .leftJoin("team as teamOne", "match.teamOneId", "teamOne.id")
    .leftJoin("team as teamTwo", "match.teamTwoId", "teamTwo.id")
    .select([
      "match.id",
      "matchType",
      "streamUrl",
      "startsAt",
      "leagueName",
      "league.url as leagueUrl",
      "teamOneId",
      "teamOne.name as teamOneName",
      "teamOne.url as teamOneUrl",
      "teamTwoId",
      "teamTwo.name as teamTwoName",
      "teamTwo.url as teamTwoUrl",
    ])
    .execute()

  return matchData.map((match) => ({
    hash: match.id!,
    ...pick(match, ["matchType", "streamUrl", "startsAt", "leagueName", "leagueUrl"]),
    teams: [
      { name: match.teamOneName, url: match.teamOneUrl },
      { name: match.teamTwoName, url: match.teamTwoUrl },
    ],
  }))
}

export const upsertMatchData = async (db: Db, matches: Match[]) => {
  console.log("Upserting match data...")

  console.log("Deleting old matches...")
  const deletePromise = db.deleteFrom("match").execute()

  console.log("Generating new data...")
  const matchData = matches.map<InsertObject<Database, "match">>((match) => ({
    id: match.hash,
    matchType: match.matchType,
    teamOneId: match.teams[0]?.name ?? null,
    teamTwoId: match.teams[1]?.name ?? null,
    leagueName: match.leagueName,
    streamUrl: match.streamUrl,
    startsAt: match.startsAt,
  }))

  const teams = new Map<string, InsertObject<Database, "team">>()
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

  const leagues = new Map<string, InsertObject<Database, "league">>()
  for (const match of matches) {
    if (match.leagueName == null || leagues.has(match.leagueName)) continue

    leagues.set(match.leagueName, {
      name: match.leagueName,
      url: match.leagueUrl,
    })
  }

  console.log("Waiting for deletion to finish...")
  await deletePromise

  console.log("Inserting matches...")
  await db.insertInto("match").values(matchData).execute()

  console.log("Inserting teams...")
  await Promise.all(
    [...teams.values()].map((team) =>
      db
        .insertInto("team")
        .values(team)
        .onConflict((b) => b.column("id").doUpdateSet(team))
        .execute(),
    ),
  )

  console.log("Inserting leagues...")
  await Promise.all(
    [...leagues.values()].map((league) =>
      db
        .insertInto("league")
        .values(league)
        .onConflict((b) => b.column("name").doUpdateSet(league))
        .execute(),
    ),
  )
}
