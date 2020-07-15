import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const LikeCommentSchema = Schema({
  post: {
    type: ObjectId,
    ref: 'Post'
  },
  user: {
    type: ObjectId,
    ref: 'User'
  }
})

LikeCommentSchema.pre('save', async function () {
  // Pre-save function
})

export default mongoose.model('LikeComment', LikeCommentSchema)
