import mongoose from "mongoose";

export const Activity = mongoose.model('Activity', { 
    duration: Number
});
