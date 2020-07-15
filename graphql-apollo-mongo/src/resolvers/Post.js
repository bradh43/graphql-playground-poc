import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Post, Comment } from '../models'

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
    author: async (post, args, context, info) => {
      await post.populate('author').execPopulate()
      return post.author
    },
    activityList: async (post, args, context, info) => {
      await post.populate('activityList').execPopulate()
      return post.activityList
    },
    commentList: async (post, args, context, info) => {
      return Comment.find({ post: post.id })
    },
    likeList: async (post, args, context, info) => {
      // TODO
    }
  }
}
