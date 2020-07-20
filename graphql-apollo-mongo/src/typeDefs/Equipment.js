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

  input UpdateEquipmentInput {
    equipmentId: ID!
    name: String
    type: AllowedEquipment
    usage: DistanceInput
    limit: DistanceInput
    active: Boolean
  }

  extend type Mutation {
    createEquipment(input: CreateEquipmentInput!): Equipment!
    
    # TODO
    updateEquipment(input: UpdateEquipmentInput!): Equipment!
    deleteEquipment(equipmentId: ID!): Equipment!
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
