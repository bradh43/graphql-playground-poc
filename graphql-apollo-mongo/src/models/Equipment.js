import mongoose, { Schema } from "mongoose";
//import { DistanceSchema } from "./Distance";

const EquipmentSchema = Schema({ 
    name: String,
    type: String,
    // I don't think this is done right
    // usage: DistanceSchema,
    // limit: DistanceSchema,
    active: Boolean
}, {
    timestamps: true
});

EquipmentSchema.pre('save', async function () {
  // Pre-save function
})

export default mongoose.model('Equipment', EquipmentSchema);