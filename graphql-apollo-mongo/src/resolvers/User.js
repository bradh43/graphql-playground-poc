import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { User } from '../models'

export default {
  Query: {
    userList: (root, args, context, info) => {
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
    createUser: async (root, { input: args }, context, info) => {
      const { email, first, last, username, password } = args
      // TODO: not auth

      // Perform validation
      const user = await User.create({
        email,
        first,
        last,
        username,
        password
      })

      return user
    }
  },
  User: {
    postList: (user, args, context, info) => {
      // TODO
    },
    teamList: (user, args, context, info) => {
      // TODO
    },
    equipmentList: (user, args, context, info) => {
      // TODO
    }
  }
}
