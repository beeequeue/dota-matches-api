export const teamsQuery = /* GraphQL */ `
  query Teams($ids: [Int!]!) {
    teams(teamIds: $ids) {
      id
      name
      series(request: { take: 20, skip: 0 }) {
        id
        type
        matches {
          startDateTime
        }

        teamOne {
          id
          name
        }
        teamTwo {
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
