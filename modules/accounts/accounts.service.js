import { User } from '../users/user.model.js';

export const updateUserAccount = async (chargedAccount) => {
  try {
    const { accounts } = req.user;
    const chargedAccounts = accounts.reduce((accounts, account) => {
      if (account.currency === chargedAccount.currency) {
        return {
          ...account,

          amount: account.amount + chargedAccount.amount
        };
      }
    });

    return
  } catch (error) {
    console.error('Error adding account:', error);
    throw error;
  }
};
