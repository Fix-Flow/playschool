/**
 * Test Setup & Helpers
 *
 * Shared utilities for test suites: DB reset, auth helpers, factories.
 */

import { PrismaClient } from '@prisma/client';

export const testPrisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});

export async function cleanDatabase() {
  const tablenames = await testPrisma.$queryRaw<Array<{ tablename: string }>>`
    SELECT tablename FROM pg_tables WHERE schemaname='public'
  `;
  // Truncate all tables
}

export function createTestUser(overrides = {}) {
  return {
    email: 'test@playschl.com',
    password: 'Test@1234',
    firstName: 'Test',
    lastName: 'User',
    role: 'STUDENT',
    ...overrides,
  };
}
