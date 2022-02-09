export const schema = gql`
  type User {
    id: String!
    githubUUID: String!
    email: String!
    owners: [Owner]
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    githubUUID: String!
    email: String!
  }

  input UpdateUserInput {
    githubUUID: String
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
