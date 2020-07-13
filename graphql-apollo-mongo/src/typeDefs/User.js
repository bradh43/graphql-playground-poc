import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }

  input CreateUserInput {
    email: String!
    first: String!
    last: String!
    username: String!
    password: String!
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): User
  }

  type User {
    id: ID!
    first: String!
    last: String!
    email: String!
    username: String!
    profilePictureURL: String!
    birthdate: String
    bio: String
    private: Boolean!
    createdAt: String!
    updatedAt: String!
    teamList: [Team!]!
    equipment: [Equipment!]!
  }
  
`
