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

export const findUserByToken = (data) => {
  return User.findById(data);
};

export const updateAccounts = (userId, account) => {
  console.log(userId, account, 'updateUserAccounts');
    return  User.findByIdAndUpdate({ _id: userId.toString() }, { accounts: account });
};
