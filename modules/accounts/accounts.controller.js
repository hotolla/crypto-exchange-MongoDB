import * as accountsService from './accounts.service.js';
import jwt from 'jsonwebtoken';

export const chargeAccount = async (req, res) => {
  try {
    const account = await accountsService.updateUserAccount(req.body);

    res.json(account);
    console.log(account);
  } catch (error) {
    console.error('Error charging account:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};
