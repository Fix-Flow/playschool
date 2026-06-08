/**
 * Auth Module — Service
 *
 * Contains all authentication business logic:
 * registration, login, token management, password reset.
 */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '@/config';
import { AuthRepository } from './auth.repository';
import { ConflictError, NotFoundError, UnauthorizedError } from '@/common/errors';
import { logger } from '@/infrastructure/logger';

const authRepository = new AuthRepository();

export class AuthService {
  async register(data: { email: string; password: string; role: string; firstName: string; lastName: string }) {
    const existing = await authRepository.findByEmail(data.email);
    if (existing) {
      throw new ConflictError('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);
    const user = await authRepository.create({
      ...data,
      password: hashedPassword,
    });

    const tokens = this.generateTokens(user);
    logger.info({ userId: user.id }, 'User registered');
    return { user: this.sanitizeUser(user), ...tokens };
  }

  async login(data: { email: string; password: string }) {
    const user = await authRepository.findByEmail(data.email);
    if (!user) {
      throw new UnauthorizedError('Invalid email or password');
    }

    const isValid = await bcrypt.compare(data.password, user.password);
    if (!isValid) {
      throw new UnauthorizedError('Invalid email or password');
    }

    const tokens = this.generateTokens(user);
    logger.info({ userId: user.id }, 'User logged in');
    return { user: this.sanitizeUser(user), ...tokens };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = jwt.verify(refreshToken, config.jwt.secret) as { id: string; email: string; role: string };
      const user = await authRepository.findById(payload.id);
      if (!user) throw new NotFoundError('User');
      return this.generateTokens(user);
    } catch {
      throw new UnauthorizedError('Invalid refresh token');
    }
  }

  async logout(userId: string) {
    // Invalidate refresh token in Redis/DB
    logger.info({ userId }, 'User logged out');
  }

  async getProfile(userId: string) {
    const user = await authRepository.findById(userId);
    if (!user) throw new NotFoundError('User', userId);
    return this.sanitizeUser(user);
  }

  async forgotPassword(email: string) {
    const user = await authRepository.findByEmail(email);
    if (!user) return; // Don't reveal if email exists
    // TODO: Generate reset token and send email
    logger.info({ userId: user.id }, 'Password reset requested');
  }

  async resetPassword(_token: string, _newPassword: string) {
    // TODO: Verify reset token, update password
    logger.info('Password reset completed');
  }

  private generateTokens(user: { id: string; email: string; role: string; schoolId?: string }) {
    const payload = { id: user.id, email: user.email, role: user.role, schoolId: user.schoolId };

    const accessToken = jwt.sign(payload, config.jwt.secret, {
      expiresIn: config.jwt.accessExpiry as any,
    });

    const refreshToken = jwt.sign(payload, config.jwt.secret, {
      expiresIn: config.jwt.refreshExpiry as any,
    });

    return { accessToken, refreshToken };
  }

  private sanitizeUser(user: Record<string, unknown>) {
    const { password, ...safe } = user;
    return safe;
  }
}
