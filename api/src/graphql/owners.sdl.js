export const schema = gql`
  type Owner {
    id: String!
    user: User!
    userId: String!
    Repository: Repository
    repositoryUrl: String!
    holdings: Int!
  }

  type Query {
    owners: [Owner!]! @requireAuth
  }

  input CreateOwnerInput {
    id: String!
    userId: String!
    repositoryUrl: String!
    holdings: Int!
  }

  input UpdateOwnerInput {
    userId: String
    repositoryUrl: String
    holdings: Int
  }

  type Mutation {
    createOwner(input: CreateOwnerInput!): Owner! @skipAuth
    # updateOwner(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    # deleteOwner(id: Int!): Post! @requireAuth
  }
`
