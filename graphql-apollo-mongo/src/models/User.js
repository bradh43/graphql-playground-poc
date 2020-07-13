import mongoose, { Schema } from "mongoose";
import { TeamSchema } from "./Team";
import { EquipmentSchema } from "./Equipment"

export const UserSchema = Schema({ 
    first: String,
    last: String,
    email: String,
    username: String,
    profilePictureURL: String,
    birthdate: String,
    bio: String,
    private: Boolean,
    teamList: [TeamSchema],
    equipment: [EquipmentSchema]
},{
    timestamps: true
});


export const User = mongoose.model('User', UserSchema);

