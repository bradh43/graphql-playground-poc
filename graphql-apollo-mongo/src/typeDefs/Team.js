import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    team(id: ID!): Team
    teamList(id: ID!): [Team!]!
    teamListByOwner(userId: ID!): [Team!]!
  }

  input CreateTeamInput {
    name: String!
    description: String
    owner: ID!
    adminList: [ID!]!
    memberList: [ID!]!
  }

  extend type Mutation {
    createTeam(input: CreateTeamInput): Team!
  }
  
  type Team {
    id: ID!
    name: String!
    description: String!
    owner: User!
    adminList: [User!]!
    memberList: [User!]!
    createdAt: String!
    updatedAt: String!
  }
`