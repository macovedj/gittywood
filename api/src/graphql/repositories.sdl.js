export const schema = gql`
  type Repository {
    url: String!
    owners: [Owner]!
    numberOfShares: Int!
  }

  type Query {
    repositories: [Repository!]! @requireAuth
  }

  input CreateRepositoryInput {
    url: String!
    numberOfShares: Int!
  }

  input UpdateRepositoryInput {
    url: String
    numberOfShares: Int
  }
`
