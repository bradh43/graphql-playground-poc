import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    likePost(id: ID!): LikePost
    likePostList: [LikePost!]!
    likePostListByPostId(postId: ID!): [LikePost!]!
  }

  input CreateLikePostInput {
    postId: ID!
    userId: ID! 
  }

  extend type Mutation {
    createLikePost(input: CreateLikePostInput): LikePost!
  }

  type LikePost {
    id: ID!
    post: Post!
    user: User!
  }
`
