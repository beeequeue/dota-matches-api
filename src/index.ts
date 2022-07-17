import { Dota } from "./dota"

const run = async () => {
  const data = await Dota.fetchTeamsData([2163])

  console.log(
    data.teams?.map((team) => ({
      name: team?.name,
      a: team?.matches?.map((match) => ({
        id: match?.id,
      })),
    })),
  )
}

run()
