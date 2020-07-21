import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    team(id: ID!): Team
    teamList(id: ID!): [Team!]!
    teamListByOwner(ownerId: ID!): [Team!]!
  }

  input CreateTeamInput {
    name: String!
    description: String
    ownerId: ID!
    adminIdList: [ID!]!
    memberIdList: [ID!]!
  }

  input UpdateTeamInput {
    teamId: ID!
    name: String
    description: String
    ownerId: ID
    adminIdList: [ID!]
    memberIdList: [ID!]
  }

  extend type Mutation {
    createTeam(input: CreateTeamInput!): Team!

    # TODO 
    updateTeam(input: UpdateTeamInput!): Team!
    deleteTeam(teamId: ID!): SuccessMessage!
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
