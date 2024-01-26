import jwt from 'jsonwebtoken';
import { addUser } from '../users/users.service.js';

export const register = (user) => {
  return addUser(user);
};

export const login = async (user) => {
  return {
    user,
    token: jwt.sign(
      { id: user._id },
      process.env.JWT_AUTH_SECRET_KEY, 
      { expiresIn: '14d' }
    )
  };
};
