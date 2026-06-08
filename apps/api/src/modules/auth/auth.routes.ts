/**
 * Auth Module — Routes
 *
 * Defines authentication endpoints: register, login, refresh, logout.
 */

import { Router } from 'express';
import { AuthController } from './auth.controller';
import { validate } from '@/common/middleware/validate.middleware';
import { authenticate } from '@/common/middleware/auth.middleware';
import { loginSchema, registerSchema, refreshTokenSchema } from './auth.validation';

const controller = new AuthController();

export const authRouter = Router();

authRouter.post('/register', validate(registerSchema), controller.register);
authRouter.post('/login', validate(loginSchema), controller.login);
authRouter.post('/refresh', validate(refreshTokenSchema), controller.refreshToken);
authRouter.post('/logout', authenticate, controller.logout);
authRouter.get('/me', authenticate, controller.me);
authRouter.post('/forgot-password', controller.forgotPassword);
authRouter.post('/reset-password', controller.resetPassword);
