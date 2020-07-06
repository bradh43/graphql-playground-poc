import mongoose from "mongoose";

export const Post = mongoose.model('Post', { 
    title: String,
    note: String,
    creation_date: String,
    last_updated_timestamp: String
});