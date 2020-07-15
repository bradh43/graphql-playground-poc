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

  extend type Mutation {
    createComment(input: CreateCommentInput): Comment!
  }

  type Comment {
    id: ID!
    note: String!
    author: User!
    likeList: [User!]!
    createdAt: String!
    updatedAt: String!
  }
`
