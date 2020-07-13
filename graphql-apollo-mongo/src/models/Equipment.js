import mongoose, { Schema } from "mongoose";
import { DistanceSchema } from "./Distance";

export const EquipmentSchema = Schema({ 
    name: String,
    type: String,
    usage: DistanceSchema,
    limit: DistanceSchema,
    active: Boolean
}, {
    timestamps: true
});

export const Equipment = mongoose.model('Equipment', EquipmentSchema);