import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  accounts: [
    {
      amount: Number,
      currency: String
    }
  ]
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  try {
    user.password = await bcrypt.hash(user.password, 10);

    next();
  } catch (error) {
    return next(error);
  }
});

export const User = mongoose.model('users', userSchema);