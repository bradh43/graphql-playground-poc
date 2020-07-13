import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    comment(id: ID!): Comment
    comments: [Comment!]!
    commentsByPostId(postId: ID!): [Comment!]!
  }

  # FIX ME: comment
  input CreateCommentInput {
    note: String!
    userId: String! 
    likeList: []
  }

  extend type Mutation {
    createComment(input: CreateCommentInput!): Comment
  }

  type Comment {
    id: ID!
    note: String!
    author: User!
    createdAt: String!
    likeList: [User!]!
  }
`
