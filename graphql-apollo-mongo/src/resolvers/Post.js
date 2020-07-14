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
        throw new UserInputError('ID is not a valid ObjectID')
      }

      return Post.findById(id)
    },
    postListByUserId: (root, { userId }, context, info) => {
      // TODO: auth, projection, sanitization

      if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new UserInputError('ID is not a valid ObjectID')
      }
      // TODO: This me need fixing
      return Post.find({ author: userId })
    }
  },
  Mutation: {
    createPost: async (root, { input: args }, context, info) => {
      const { title, note, userId, activityIdList } = args
      // TODO: auth

      // Perform validation
      const post = await Post.create({
        title,
        note,
        author: userId,
        activityList: activityIdList
      })

      return post
    }
  },
  Post: {
    author: (post, args, context, info) => {
      // TODO
    },
    activityList: (post, args, context, info) => {
      // TODO
    },
    commentList: (post, args, context, info) => {
      // TODO
    }
  }
}
