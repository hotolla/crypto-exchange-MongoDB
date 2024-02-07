import * as accountsService from './accounts.service.js';

export const chargeAccount = async (req, res) => {
  try {
    const account = await accountsService.updateUserAccount(req.user, req.body);

    res.json(account);
  } catch (error) {
    console.error('Error charging account:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};
