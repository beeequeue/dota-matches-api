import { $fetch } from "ohmyfetch"

import leagueQuery from "./league.graphql"
import { LeagueQuery } from "./types"

const $stratz = $fetch.create({
  baseURL: "https://api.stratz.com/graphql",
  headers: {
    Authorization: `Bearer ${process.env.STRATZ_TOKEN!}`,
  },
})

const fetchLeagueMatches = async (id: number): Promise<LeagueQuery> => {
  const response = await $stratz<{ data: LeagueQuery }>("/", {
    method: "POST",
    responseType: "json",
    body: {
      query: leagueQuery,
      variables: { id },
    },
  })

  return response.data
}

export const Dota = { fetchLeague: fetchLeagueMatches }
