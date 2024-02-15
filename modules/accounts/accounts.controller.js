import * as accountsService from './accounts.service.js';

export const chargeAccount = async (req, res) => {
  try {
    const user = await accountsService.updateUserAccount(req.user, req.body);

    res.json(user);
  } catch (error) {
    console.error('Error charging account:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};
