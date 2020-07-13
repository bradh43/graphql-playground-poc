import mongoose, { Schema } from "mongoose";
import { DistanceSchema } from "./Distance";

export const EquipmentSchema = Schema({ 
    name: String,
    type: String,
    creation_date: {type: Date, default: Date.now},
    usage: DistanceSchema,
    limit: DistanceSchema,
    active: Boolean 
});

export const Equipment = mongoose.model('Equipment', EquipmentSchema);