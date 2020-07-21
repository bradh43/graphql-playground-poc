import mongoose from 'mongoose'
import { UserInputError, ApolloError } from 'apollo-server-express'
import { Post, Comment, LikePost } from '../models'

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
      const { title, note, authorId, activityIdList } = args

      if (!mongoose.Types.ObjectId.isValid(authorId)) {
        throw new UserInputError('ID is not a valid ObjectID')
      }
      // TODO: auth

      // Perform validation
      const post = await Post.create({
        title,
        note,
        author: authorId,
        activityList: activityIdList
      })

      return post
    },
    updatePost: async (root, { input: args }, context, info) => {
      const { postId, activityIdList, ...body } = args

      if (!mongoose.Types.ObjectId.isValid(postId)) {
        throw new UserInputError('ID is not a valid ObjectID')
      }

      try {
        const post = await Post.update(postId, body, { new: true })
        post.activityList = activityIdList

        return post
      } catch (e) {
        throw new ApolloError(e)
      }
    },
    deletePost: async (root, args, context, info) => {
      const { postId } = args

      if (!mongoose.Types.ObjectId.isValid(postId)) {
        throw new UserInputError('ID is not a valid ObjectID')
      }

      try {
        const post = await Post.findById(postId)
        // TODO: Checks, auth, validation
        await LikePost.deleteMany(postId)

        await post.delete()

        return { message: 'Post Deleted', success: true }
      } catch (e) {
        throw new ApolloError(e)
      }
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
      return LikePost.find({ post: post.id })
    }
  }
}
