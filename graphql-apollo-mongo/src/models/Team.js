import mongoose from "mongoose";

export const Team = mongoose.model('Team', { 
    name: String,
    description: String,
    createdAt: {type: Date, default: Date.now}
});

