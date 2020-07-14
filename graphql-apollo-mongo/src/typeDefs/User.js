import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    # me: User
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
    createUser(input: CreateUserInput): User!
  }

  # extend type Mutation {
  #   createUser(email: String!, first: String!, last: String!, username: String!, password: String!): User
  # }

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
    posts: [Post!]!
    teamList: [Team!]!
    equipment: [Equipment!]!
    createdAt: String!
    updatedAt: String!
  }
`
