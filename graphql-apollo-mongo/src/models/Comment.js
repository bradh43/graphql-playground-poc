import mongoose from "mongoose";

export const Comment = mongoose.model('Comment', { 
    note: String,
    creation_date: String,
    last_updated_date: String
});