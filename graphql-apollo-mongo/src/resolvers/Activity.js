import mongoose from 'mongoose'
import { UserInputError, ApolloError } from 'apollo-server-express'
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
        throw new UserInputError('ID is not a valid ObjectID')
      }

      return Activity.findById(id)
    }
  },
  Mutation: {
    createActivity: async (root, { input: args }, context, info) => {
      const { type, duration, distance, equipmentId, additionalInfo } = args
      // TODO: auth

      // Perform validation
      const activity = await Activity.create({
        type,
        duration,
        distance,
        equipment: equipmentId,
        additionalInfo
      })

      return activity
    },
    updatedActivity: async (root, { input: args }, context, info) => {
      // TODO
    },
    deleteActivity: async (root, args, context, info) => {
      const { activityId } = args

      try {
        const activity = await Activity.findById(activityId)
        // TODO: Checks, auth, validation
        await activity.delete()

        return activity
      } catch (e) {
        throw new ApolloError(e)
      }
    }
  },
  Activity: {
    equipment: async (activity, args, context, info) => {
      await activity.populate('equipment').execPopulate()
      return activity.equipment
    }
  }
}
