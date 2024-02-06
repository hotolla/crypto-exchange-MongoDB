import jwt from 'jsonwebtoken';
import { findUser } from '../users/users.service.js';

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_AUTH_SECRET_KEY);
    console.log(decodedToken, 'auth');

    req.user = await findUser(decodedToken.id);

    next();
  } catch {
    return res.status(401);
  }
};
