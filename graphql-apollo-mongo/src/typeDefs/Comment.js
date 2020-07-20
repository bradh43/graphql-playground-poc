import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    comment(id: ID!): Comment
    commentList: [Comment!]!
    commentListByPostId(postId: ID!): [Comment!]!
  }

  input CreateCommentInput {
    note: String!
    postId: ID!
    authorId: ID! 
    likeIdList: [ID!]!
  }

  # input LikeCommentInput {
  #   commentId: ID!
  #   userId: ID!
  # }

  extend type Mutation {
    createComment(input: CreateCommentInput!): Comment!

    # TODO
    deleteComment(commentId: ID!): Comment!
  }

  type Comment {
    id: ID!
    note: String!
    author: User!
    likeList: [LikeComment!]!
    createdAt: String!
    updatedAt: String!
  }
`
