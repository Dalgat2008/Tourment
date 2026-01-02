import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  phone: String,
  balance: { type: Number, default: 0 },
  referralCode: String,
  referredBy: String,
  isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('User', UserSchema);