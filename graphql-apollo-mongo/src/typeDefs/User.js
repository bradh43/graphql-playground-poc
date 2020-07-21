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

  input DeleteUserInput {
    userId: ID!
    email: String!
    username: String!
    # birthdate: String!
    password: String!
  }

  input UpdateUserInput {
    userId: ID!
    email: String
    username: String
    password: String
    bio: String
    private: Boolean
    teamList: [Team!]
  }


  extend type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: UpdateUserInput!): User!

    # TODO
    deleteUser(input: DeleteUserInput!): SuccessMessage!
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
