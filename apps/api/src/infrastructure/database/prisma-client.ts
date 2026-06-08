/**
 * Prisma Client Singleton
 *
 * Ensures a single Prisma instance across the application.
 * In development, attaches to globalThis to survive HMR reloads.
 */

import { PrismaClient } from '@prisma/client';
import { config } from '@/config';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: config.isDevelopment
      ? ['query', 'info', 'warn', 'error']
      : ['error'],
  });

if (!config.isProduction) {
  globalForPrisma.prisma = prisma;
}
