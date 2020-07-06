import mongoose from "mongoose";

export const Equipment = mongoose.model('Equipment', { 
    name: String,
    creation_date: String,
    active: Boolean 
});