import mongoose from "mongoose";

export const User = mongoose.model('User', { 
    first: String,
    last: String,
    email: String,
    display_name: String,
    profile_picture_url: String,
    birthdate: String,
    bio: String,
    private: Boolean,
    creation_date: String
});

