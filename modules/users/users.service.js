import { User } from './user.model.js';

export const addUser = (user) => {
  try {
    return User.create(user);
  } catch (error) {
    throw error;
  }
};

export const findUser = (data) => {
  return User.findOne(data);
};
