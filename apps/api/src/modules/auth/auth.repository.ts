/**
 * Auth Module — Repository
 *
 * Data access layer for user/auth operations.
 * Encapsulates all Prisma queries for the auth domain.
 */

import { prisma } from '@/infrastructure/database/prisma-client';

export class AuthRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  }

  async create(data: {
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
  }) {
    return prisma.user.create({ data });
  }

  async updatePassword(id: string, hashedPassword: string) {
    return prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    });
  }

  async updateLastLogin(id: string) {
    return prisma.user.update({
      where: { id },
      data: { lastLoginAt: new Date() },
    });
  }
}
