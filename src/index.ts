import { Dota } from "./dota"

const run = async () => {
  const league = await Dota.fetchLeague(14_279)

  console.log(league.league?.nodeGroups?.flatMap((group) => group?.nodes ?? []))
}

run()
