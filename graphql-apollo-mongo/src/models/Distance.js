import mongoose from "mongoose";

export const Distance = mongoose.model('Distance', { 
    value: Number,
    unit: String
});
