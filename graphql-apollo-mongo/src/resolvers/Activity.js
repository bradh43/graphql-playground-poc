import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Activity } from '../models'

export default {
  Query: {
    activityList: (root, args, context, info) => {
      // TODO: auth, projection, pagination

      return Activity.find({})
    },
    activity: (root, { id }, context, info) => {
      // TODO: auth, projection, sanitization

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError('ID is not a valid ActivityID')
      }

      return Activity.findById(id)
    }
  },
  Mutation: {
    createActivity: async (root, { input: args }, context, info) => {
      // TODO: not auth

      // Perform validation
      const activity = await Activity.create(args)

      return activity
    }
  },
  Activity: {
    equipment: (activity, args, context, info) => {
      // HELP THIS WON'T WORK
      return Equipment.find(activity.equipmentId)

      //return Equipment.find( { _id: activity.equipment.id })
      return null
    }
  }
}