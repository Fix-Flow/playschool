/**
 * PlaySchl API — Application Entry Point
 *
 * Bootstraps the Express server with all middleware, routes, and
 * infrastructure services (database, cache, logger).
 */

import { createApp } from './app';
import { config } from './config';
import { logger } from './infrastructure/logger';
import { prisma } from './infrastructure/database/prisma-client';
import { redis } from './infrastructure/cache/redis-client';

async function bootstrap(): Promise<void> {
  try {
    // Verify database connection
    await prisma.$connect();
    logger.info('✅ Database connected');

    // Verify Redis connection
    await redis.ping();
    logger.info('✅ Redis connected');

    // Create and start Express app
    const app = createApp();

    app.listen(config.port, () => {
      logger.info(
        `🚀 PlaySchl API running on port ${config.port} [${config.env}]`
      );
      logger.info(`📖 API docs: http://localhost:${config.port}/api/v1/docs`);
    });
  } catch (error) {
    logger.fatal({ error }, '❌ Failed to start server');
    process.exit(1);
  }
}

// Graceful shutdown
const shutdown = async (signal: string) => {
  logger.info(`${signal} received — shutting down gracefully`);
  await prisma.$disconnect();
  await redis.quit();
  process.exit(0);
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

bootstrap();
