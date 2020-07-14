import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Equipment } from '../models'

export default {
  Query: {
    equipmentList: (root, args, context, info) => {
      // TODO: auth, projection, pagination

      return Equipment.find({})
    },
    equipment: (root, { id }, context, info) => {
      // TODO: auth, projection, sanitization

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError('ID is not a valid UserID')
      }

      return Equipment.findById(id)
    }
  },
  Mutation: {
    createEquipment: async (root, { input: args }, context, info) => {
      // TODO: not auth

      // Perform validation
      const equipment = await Equipment.create(args)

      return equipment
    }
  }
}
