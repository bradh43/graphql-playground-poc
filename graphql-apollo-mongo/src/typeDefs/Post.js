import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    post(id: ID!): Post
    posts: [Post!]!
    postsByUserId(userId: ID!): [Post!]!
  }

  input CreatePostInput {
    title: String!
    note: String
    userId: ID!
    activityList: [ID!]!
    commentList: [ID!]!
    likeList: [ID!]!
  }

  extend type Mutation {
    createPost(input: CreatePostInput!): Post
  }
  
  type Post {
    id: ID!
    title: String!
    note: String
    author: User!
    createdAt: String!
    updatedAt: String!
    activityList: [Activity!]!
    likeList: [User!]!
    commentList: [Comment!]!
  }
`