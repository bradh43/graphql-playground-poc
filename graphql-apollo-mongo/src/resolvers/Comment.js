import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Comment } from '../models'

export default {
  Query: {
    comment: (root, args, context, info) => {
      const { id } = args
      // TODO: auth, projection, sanitization

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError('ID is not a valid ObjectID')
      }

      return Comment.findById(id)
    }
  },
  Mutation: {
    createComment: async (root, { input: args }, context, info) => {
      const { note, postId, authorId, likeIdList } = args
      // TODO: auth

      // Perform validation
      const comment = await Comment.create({
        note,
        post: postId,
        author: authorId,
        likeList: likeIdList
      })

      return comment
    }
  },
  Comment: {
    author: async (comment, args, context, info) => {
      await comment.populate('author').execPopulate()
      return comment.author
    },
    likeList: async (comment, args, context, info) => {
      await comment.populate('likeList').execPopulate()
      return comment.likeList
    }
  }
}

// author: comment => User.findById(comment.userId)
