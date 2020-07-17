import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Equipment } from '../models'

export default {
  Query: {
    equipmentList: (root, args, context, info) => {
      // TODO: auth, projection, pagination

      return Equipment.find({})
    },
    equipment: (root, args, context, info) => {
      const { id } = args
      // TODO: auth, projection, sanitization

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError('ID is not a valid ObjectID')
      }

      return Equipment.findById(id)
    }
  },
  Mutation: {
    createEquipment: async (root, { input: args }, context, info) => {
      const { name, type, usage, limit, active, ownerId } = args
      // TODO: auth

      // Perform validation
      const equipment = await Equipment.create({
        name,
        type,
        usage,
        limit,
        active,
        owner: ownerId
      })

      return equipment
    },
    updateEquipment: async (root, { input: args }, context, info) => {
      // TODO
    },
    deleteEquipment: async (root, args, context, info) => {
      // TODO
    }
  },
  Equipment: {
    owner: async (equipment, args, context, info) => {
      await equipment.populate('owner').execPopulate()
      return equipment.owner
    }
  }
}
