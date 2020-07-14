import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    # me: User
    user(id: ID!): User
    userList: [User!]!
  }

  input CreateUserInput {
    email: String!
    first: String!
    last: String!
    username: String!
    password: String!
  }

  extend type Mutation {
    createUser(input: CreateUserInput): User!
  }

  type User {
    id: ID!
    email: String!
    first: String!
    last: String!
    username: String!
    profilePictureURL: String!
    birthdate: String
    bio: String
    private: Boolean!
    postList: [Post!]!
    teamList: [Team!]!
    equipmentList: [Equipment!]!
    createdAt: String!
    updatedAt: String!
  }
`
