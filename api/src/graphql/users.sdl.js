export const schema = gql`
  type User {
    id: String!
    email: String!
    owner: [Owner]!
  }

  type Query {
    users: [User!]! @requireAuth
  }

  input CreateUserInput {
    email: String!
  }

  input UpdateUserInput {
    email: String
  }
`
