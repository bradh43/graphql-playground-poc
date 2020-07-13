import mongoose, { Schema } from "mongoose";

export const DistanceSchema = Schema({ 
    value: Number,
    unit: String
});

export const Distance = mongoose.model('Distance', DistanceSchema);
