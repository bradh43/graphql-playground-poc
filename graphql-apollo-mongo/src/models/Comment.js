import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const CommentSchema = Schema({
  note: String,
  author: {
    type: ObjectId,
    ref: 'User'
  },
  likeList: [{
    type: ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
})

CommentSchema.pre('save', async function () {
  // Pre-save function
})

export default mongoose.model('Comment', CommentSchema)
