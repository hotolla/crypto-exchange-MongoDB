import bcrypt from 'bcrypt';
import * as authService from './auth.service.js';
import { findUser } from '../users/users.service.js';

export const register = async (req, res) => {
  const user = await authService.register(req.body);

  res.json({ user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findUser({ email });
    console.log(user);
    if (!user) {
      return res.status(401).send('Login data isn\'t valid.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid);
    // if (!isPasswordValid) {
    //   return res.status(401).send('Login data isn\'t valid.');
    // }

    const loginData = await authService.login(user);
    console.log(loginData, 'loginData');
    res.json(loginData);
  } catch (error) {
    console.error('Error comparing passwords:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

