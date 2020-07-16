import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    equipment(id: ID!): Equipment!
    equipmentList: [Equipment!]!
  }

  enum AllowedEquipment {
    SHOE
    BIKE
  }

  input CreateEquipmentInput {
    name: String!
    type: AllowedEquipment!
    usage: DistanceInput!
    limit: DistanceInput!
    active: Boolean!
    ownerId: ID!
  }

  input RetireEquipmentInput {
    id: ID!
    active: Boolean!
  }

  extend type Mutation {
    createEquipment(input: CreateEquipmentInput): Equipment!
    
    # TODO
    retireEquipment(input: RetireEquipmentInput): Equipment!
    deleteEquipment(id: ID!): SuccessMessage
  }

  type Equipment {
    id: ID!
    type: AllowedEquipment!
    name: String!
    createdAt: String!
    usage: Distance!
    limit: Distance!
    active: Boolean!
    owner: User!
  }
`
