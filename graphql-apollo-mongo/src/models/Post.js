import mongoose from "mongoose";

export const Post = mongoose.model('Post', { 
    title: String,
    note: String,
    createdAt: {type: Date, default: Date.now},
    lastUpdatedTimestamp: String
});