import * as accountsService from './accounts.service.js';
import jwt from 'jsonwebtoken';

export const chargeAccount = async (req, res) => {
  try {
    if (!req.headers.authorization) {
      throw new Error('No authorization token provided');
    }
    const token = req.headers.authorization.split(' ')[1]; // Assuming the header format is "Bearer <token>"
    console.log('JWT_SECRET!!!:', process.env.JWT_AUTH_SECRET_KEY);

    const decodedToken = jwt.verify(token, process.env.JWT_AUTH_SECRET_KEY);

    console.log(token);
    const userId = decodedToken.userId;
    console.log("userId:", userId);
    const account = await accountsService.updateUserAccount(req.body);

    res.json(account);
  } catch (error) {
    console.error('Error charging account:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};
