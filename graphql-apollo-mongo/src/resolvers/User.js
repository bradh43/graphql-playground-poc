import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { User, Post } from '../models'

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
      Post.find({ author: user.id })
    },
    teamList: async (user, args, context, info) => {
      await user.populate('teamList').execPopulate()
      return user.teamList
    },
    equipmentList: async (user, args, context, info) => {
      await user.populate('equipmentList').execPopulate()
      return user.equipmentList
    }
  }
}
