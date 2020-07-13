import mongoose, { Schema } from "mongoose";
import { DistanceSchema } from "./Distance";
import { EquipmentSchema } from "./Equipment";

export const ActivitySchema = Schema({ 
    type: String,
    duration: Number,
    distance: DistanceSchema,
    equipment: EquipmentSchema,
    additionalInfo: {
        averageHeartRate: Number,
        elevationGain: Number
    }
});

export const Activity = mongoose.model('Activity', ActivitySchema);
