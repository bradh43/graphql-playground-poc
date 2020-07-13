import mongoose, { Schema } from "mongoose";
import { UserSchema } from "./User";
import { ActivitySchema } from "./Activity";
import { CommentSchema } from "./Comment";

export const PostSchema = Schema({ 
    title: String,
    note: String,
    author: UserSchema,
    activityList: [ActivitySchema],
    likeList: [UserSchema],
    commentList: [CommentSchema]
}, {
    timestamps: true
});

export const Post = mongoose.model('Post', PostSchema);