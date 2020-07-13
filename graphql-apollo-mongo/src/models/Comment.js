import mongoose, { Schema } from "mongoose";
import { UserSchema } from "./User";

export const CommentSchema = Schema({ 
    note: String,
    author: UserSchema,
    likeList: [UserSchema]
}, {
    timestamps: true
});

export const Comment = mongoose.model('Comment', CommentSchema);