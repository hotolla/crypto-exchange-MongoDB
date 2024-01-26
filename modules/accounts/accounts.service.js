import { User } from '../users/user.model.js';

export const updateUserAccount = async (account) => {
  try {
    const newAccount = await User.updateOne(account);
    console.log(account, newAccount, 'newAccount');
    return newAccount;
  } catch (error) {
    console.error('Error adding account:', error);
    throw error;
  }
};
