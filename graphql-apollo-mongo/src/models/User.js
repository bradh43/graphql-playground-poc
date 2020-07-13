import mongoose from "mongoose";

export const User = mongoose.model('User', { 
    first: String,
    last: String,
    email: String,
    username: String,
    profilePictureURL: String,
    birthdate: String,
    bio: String,
    private: Boolean,
    createdAt: {type: Date, default: Date.now},
});

