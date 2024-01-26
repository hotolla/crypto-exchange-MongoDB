import { User } from './user.model.js';

export const addUser = async (user) => {
  try {
    const newUser = await User.create(user);
    console.log(newUser, 'addUser');
    return newUser;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

export const findUser = async (data) => {
  console.log(data, 'findUser');
  return User.findOne(data);
};
