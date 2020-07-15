import root from './root'
import User from './User'
import Comment from './Comment'
import Equipment from './Equipment'
import Post from './Post'
import Activity from './Activity'
import Team from './Team'
import Distance from './Distance'

export default [
  root,
  User,
  Post,
  Team,
  Equipment,
  Comment,
  Activity,
  Distance
]

/* 
  LikePost 
    post: postID
    user: userID
    id: ID

  LikeComment
    comment: commentId
    user: userId
    id: ID
*/
