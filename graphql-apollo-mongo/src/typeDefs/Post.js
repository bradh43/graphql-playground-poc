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
    tagIdList: [ID!]!
    # posts wont have comments, scalability issue
    # commentIdList: [ID!]!
    # likeIdList: [ID!]!
  }

  input UpdatePostInput {
    postId: ID!
    title: String
    note: String
  }

  input PostActivityInput {
    postId: ID!
    activityId: ID!
  }

  input PostTagInput {
    postId: ID!
    userId: ID!
  }
  
  extend type Mutation {
    createPost(input: CreatePostInput): Post!
    updatePost(input: UpdatePostInput): Post!
    deletePost(postId: ID!): SuccessMessage!
    addActivity(input: PostActivityInput): SuccessMessage!
    removeActivity(input: PostActivityInput): SuccessMessage!
    addTag(input: PostTagInput): SuccessMessage!
    removeTag(input: PostTagInput): SuccessMessage!
  }
  
  type Post {
    id: ID!
    title: String!
    note: String
    author: User!
    tagList: [User!]!
    createdAt: String!
    updatedAt: String!
    activityList: [Activity!]!
    likeList: [LikePost!]!
    commentList: [Comment!]!
  }
`
