import express from 'express';
import { router } from './auth/router.js';
import { accountsRouter } from './accounts/router.js';

export const expressRouter = express.Router();
expressRouter.use(router, accountsRouter);
