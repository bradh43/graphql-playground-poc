import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { LikeComment } from '../models'

export default {
  Query: {
    likeComment: (root, args, context, info) => {
      const { id } = args
      // TODO: auth, projection, sanitization

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError('ID is not a valid ObjectID')
      }

      return LikeComment.findById(id)
    }
  },
  Mutation: {
    createLikeComment: async (root, { input: args }, context, info) => {
      const { commentId, userId } = args
      // TODO: auth

      // Perform validation
      const likeComment = await LikeComment.create({
        comment: commentId,
        user: userId
      })

      return likeComment
    }
  },
  LikeComment: {
    comment: async (likeComment, args, context, info) => {
      await likeComment.populate('comment').execPopulate()
      return likeComment.comment
    },
    user: async (likeComment, args, context, info) => {
      await likeComment.populate('user').execPopulate()
      return likeComment.user
    }
  }
}
