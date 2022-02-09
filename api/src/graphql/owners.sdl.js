export const schema = gql`
  type Owner {
    id: String!
    user: User!
    userId: String!
    holdings: Int!
    repository: Repository
    repositoryId: String
  }

  type Query {
    owners: [Owner!]! @requireAuth
    owner(id: String!): Owner @requireAuth
  }

  input CreateOwnerInput {
    userId: String!
    holdings: Int!
    repositoryId: String
  }

  input UpdateOwnerInput {
    userId: String
    holdings: Int
    repositoryId: String
  }

  type Mutation {
    createOwner(input: CreateOwnerInput!): Owner! @requireAuth
    updateOwner(id: String!, input: UpdateOwnerInput!): Owner! @requireAuth
    deleteOwner(id: String!): Owner! @requireAuth
  }
`
