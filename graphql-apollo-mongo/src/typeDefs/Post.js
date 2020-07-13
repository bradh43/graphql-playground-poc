import { gql } from 'apollo-server-express'
import { Distance, DistanceInput } from './Distance'

export default gql`
  extend type Query {
    post(id: ID!): Post
    posts: [Post!]!
    postsByUserId(userId: ID!): [Post!]!
  }

  ## FIX ME: post
  input CreatePostInput {
    title: String!
    note: String
    userId: String!
    activity
    ## author fix me

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
