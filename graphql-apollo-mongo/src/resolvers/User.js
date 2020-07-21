import mongoose from 'mongoose'
import { UserInputError, ApolloError } from 'apollo-server-express'
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
      const { email, first, last, username, password, birthdate } = args
      // TODO: not auth

      // Perform validation
      const user = await User.create({
        email,
        first,
        last,
        username,
        password,
        birthdate
      })

      return user
    },
    updateUser: async (root, { input: args }, context, info) => {
      // TODO
    },
    followUser: async (root, { input: args }, context, info) => {
      // TODO
    },
    unfollowUser: async (root, { input: args }, context, info) => {
      // TODO
    },
    deleteUser: async (root, { input: args }, context, info) => {
      const { userId } = args
      // TODO: add validaiton with email, username and password...
      //, email, password <-- to confirm delete

      if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new UserInputError('ID is not a valid ObjectID')
      }

      try {
        const user = await User.findById(userId)
        // TODO: Checks, auth, validation
        await user.delete()

        return { message: 'User Deleted', success: true }
      } catch (e) {
        throw new ApolloError(e)
      }
    }
  },
  User: {
    postList: (user, args, context, info) => {
      // TODO: pagination, projection
      return Post.find({ author: user.id })
    },
    teamList: async (user, args, context, info) => {
      await user.populate('teamList').execPopulate()
      return user.teamList
    },
    equipmentList: async (user, args, context, info) => {
      await user.populate('equipmentList').execPopulate()
      return user.equipmentList
    },
    followerList: async (user, args, context, info) => {
      await user.populate('followerList').execPopulate()
      return user.followerList
    },
    followingList: async (user, args, context, info) => {
      await user.populate('followingList').execPopulate()
      return user.followingList
    }
  }
}
