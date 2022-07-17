import { mande, MandeError } from "mande"

import { teamsQuery } from "./queries"
import { TeamsQuery, TeamsQueryVariables } from "./types"

const stratzClient = mande("https://api.stratz.com", {
  responseAs: "json",
  headers: {
    Authorization: `Bearer ${process.env.STRATZ_TOKEN!}`,
  },
})

const fetchLeagueMatches = async (ids: number[]): Promise<TeamsQuery> => {
  const variables: TeamsQueryVariables = {
    ids,
  }
  const result = await stratzClient
    .post<{ data: TeamsQuery }>("/graphql", {
      query: teamsQuery,
      variables,
    })
    .catch((error: MandeError) => error)

  if (result instanceof Error) {
    console.error({
      status: result.response.status,
      body: await result.response
        .json()
        .catch(() => result.response.text().catch(() => null)),
    })
    throw new Error("!")
  }

  return result.data
}

export const Dota = { fetchTeamsData: fetchLeagueMatches }
