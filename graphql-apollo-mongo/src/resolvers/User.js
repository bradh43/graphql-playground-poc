import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { User } from '../models'

export default {
  Query: {
    users: (root, args, context, info) => {
      // TODO: auth, projection, pagination

      return User.find({})
    },
    user: (root, { id }, context, info) => {
      // TODO: auth, projection, sanitization

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError('ID is not a valid UserID')
      }

      return User.findById(id)
    }
  },
  Mutation: {
    createUser: (root, { input: args }, context, info) => {
      // TODO: not auth

      // Perform validation
      return User.create(args)
    }
  }
}
