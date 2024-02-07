import { updateAccounts } from '../users/users.service.js';

export const updateUserAccount = (user, chargeDetail) => {
  try {
    // const chargedAccounts = user.accounts.reduce((accounts, account) => {
    const accountIndex = user.accounts.findIndex(
      (account) => account.currency === chargeDetail.currency
    );

    if (accountIndex === -1) {
      user.accounts.push({
        currency: chargeDetail.currency,
        amount: chargeDetail.amount
      });
    } else {
      user.accounts[accountIndex].amount += chargeDetail.amount;
    }

    return updateAccounts(user._id, user.accounts);
  } catch (error) {
    console.error('Error updating account:', error);
    throw error;
  }
};
