import mongoose from "mongoose";

export const Comment = mongoose.model('Comment', { 
    note: String,
    createdAt: {type: Date, default: Date.now},
    lastUpdatedDate: String
});