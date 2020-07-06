import mongoose from "mongoose";

export const Team = mongoose.model('Team', { 
    name: String,
    description: String,
    creation_date: String
});

