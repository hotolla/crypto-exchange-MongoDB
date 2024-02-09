import * as accountsService from './accounts.service.js';
import { updateAccounts } from "../users/users.service.js";

export const chargeAccount = async (req, res) => {
  try {
    const account = await accountsService.updateUserAccount(req.user, req.body);

    const accountData = await updateAccounts(account);

    res.json(accountData);
  } catch (error) {
    console.error('Error charging account:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};
