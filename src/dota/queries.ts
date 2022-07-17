export const teamsQuery = /* GraphQL */ `
  query Teams($ids: [Int!]!, $after: Long) {
    teams(teamIds: $ids) {
      id
      name
      matches(request: { take: 100, skip: 0, startDateTime: $after }) {
        id
        statsDateTime
        radiantTeam {
          id
          name
        }
        direTeam {
          id
          name
        }

        league {
          displayName
        }
      }
    }
  }
`
