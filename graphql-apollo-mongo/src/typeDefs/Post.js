import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    post(id: ID!): Post
    postList: [Post!]!
    postListByUserId(userId: ID!): [Post!]!
  }

  input CreatePostInput {
    title: String!
    note: String
    authorId: ID!
    activityIdList: [ID!]!
    # posts wont have comments, scalability issue
    # commentIdList: [ID!]!
    # likeIdList: [ID!]!
  }

  input UpdatePostInput {
    postId: ID!
    title: String
    note: String
    activityIdList: [ID!]
  }
  
  extend type Mutation {
    createPost(input: CreatePostInput): Post!

    # TODO
    updatePost(input: UpdatePostInput): Post!
    deletePost(postId: ID!): SuccessMessage!

    # Liking a post would be a LikePost mutation, not a post mutation
    # likePost(input: LikePostInput): Post! 
  }
  
  type Post {
    id: ID!
    title: String!
    note: String
    author: User!
    createdAt: String!
    updatedAt: String!
    activityList: [Activity!]!
    likeList: [LikePost!]!
    commentList: [Comment!]!
  }
`
