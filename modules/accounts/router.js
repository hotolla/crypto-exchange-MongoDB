import express from 'express';
import { chargeAccount } from './accounts.controller.js';

export const router = express.Router();

router.post('/accounts', chargeAccount);
