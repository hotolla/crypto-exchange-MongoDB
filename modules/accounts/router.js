import express from 'express';
import { chargeAccount } from './accounts.controller.js';

export const accountsRouter = express.Router();

accountsRouter.post('/accounts', chargeAccount);
