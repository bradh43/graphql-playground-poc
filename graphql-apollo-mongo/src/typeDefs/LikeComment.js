import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    likeComment(id: ID!): LikeComment
    likeCommentList: [LikeComment!]!
    likeCommentListByPostId(postId: ID!): [LikeComment!]!
  }

  input CreateLikeCommentInput {
    commentId: ID!
    userId: ID! 
  }

  extend type Mutation {
    createLikeComment(input: CreateLikeCommentInput): LikeComment!
  }

  type LikeComment {
    id: ID!
    comment: Comment!
    user: User!
  }
`
