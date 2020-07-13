import mongoose, { Schema } from "mongoose";
import { UserSchema } from "./User";

export const TeamSchema = Schema({ 
    name: String,
    description: String,
    owner: UserSchema,
    adminList: [UserSchema],
    memberList: [UserSchema]
}, {
    timestamps: true
});

export const Team = mongoose.model('Team', TeamSchema);

