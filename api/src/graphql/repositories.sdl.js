export const schema = gql`
  type Repository {
    id: String!
    url: String!
    numberOfShares: Int!
    owners: [Owner]
  }

  type Query {
    repositories: [Repository!]! @requireAuth
    repository(id: String!): Repository @requireAuth
  }

  input CreateRepositoryInput {
    url: String!
    numberOfShares: Int!
  }

  input UpdateRepositoryInput {
    url: String
    numberOfShares: Int
  }

  type Mutation {
    createRepository(input: CreateRepositoryInput!): Repository! @requireAuth
    updateRepository(id: String!, input: UpdateRepositoryInput!): Repository!
      @requireAuth
    deleteRepository(id: String!): Repository! @requireAuth
  }
`
