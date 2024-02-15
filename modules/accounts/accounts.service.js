import { updateUser } from '../users/users.service.js';

export const updateUserAccount = (user, chargeDetail) => {
  try {
    const { accounts } = user;

    const accountIndex = accounts.findIndex((account) => {
      return account.currency === chargeDetail.currency;
    });

    if (accountIndex === -1) {
      accounts.push(chargeDetail);
    } else {
      user.accounts[accountIndex].amount += chargeDetail.amount;
    }

    return updateUser(user._id, { accounts });
  } catch (error) {
    console.error('Error updating account:', error);
    throw error;
  }
};
