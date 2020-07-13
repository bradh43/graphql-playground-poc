import { gql } from 'apollo-server-express'
import { Distance, DistanceInput } from './Distance'

export default gql`
  extend type Query {
    equipment(id: ID!): Equipment!
    equipments: [Equipments!]!
  }

  enum AllowedEquipment {
    SHOE
    BIKE
  }

  // FIX ME: equipment
  input CreateEquipmentInput {
    name: String!
    type: AllowedEquipment!
    usage: DistanceInput!
    limit: DistanceInput!
    active: Boolean!
  }

  extend type Mutation {
    createEquipment(input: CreateEquipmentInput): Equipment
  }
  

  type Equipment {

    id: ID!
    type: AllowedEquipment!
    name: String!
    createdAt: String!
    usage: Distance!
    limit: Distance!
    active: Boolean!
  }
`
