import mongoose, { Schema } from "mongoose";

const { ObjectId } = Schema.Types 

const UserSchema = Schema({ 
  email: String,
  first: String,
  last: String,
  username: String,
  password: String,
  profilePictureURL: String,
  birthdate: String,
  bio: String,
  private: Boolean,
  teamList: [{
    type: ObjectId,
    ref: 'Team'
  }],
  equipment: [{
    type: ObjectId,
    ref: 'Equipment'
  }]
}, {
  timestamps: true
});

UserSchema.pre('save', async function () {
  // Pre-save function
})

export default mongoose.model('User', UserSchema);

