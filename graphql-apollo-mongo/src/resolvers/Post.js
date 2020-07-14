import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Post } from '../models'

export default {
  Query: {
    postList: (root, args, context, info) => {
      // TODO: auth, projection, pagination

      return Post.find({})
    },
    post: (root, { id }, context, info) => {
      // TODO: auth, projection, sanitization

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError('ID is not a valid PostID')
      }

      return Post.findById(id)
    },
    postListByUserId: (root, { userId }, context, info ) => {
      // TODO: auth, projection, sanitization

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError('ID is not a valid UserID')
      }
      // TODO: This me need fixing
      return Post.find({ author: userID })
    }
  },
  Mutation: {
    createPost: async (root, { input: args }, context, info) => {
      // TODO: not auth

      // Perform validation
      const post = await Post.create(args)

      return post
    }
  }
}
