/**
 * Application Logger
 *
 * Structured logging with Pino. Pretty-prints in development,
 * outputs JSON in production for log aggregation tools.
 */

import pino from 'pino';
import { config } from '@/config';

export const logger = pino({
  level: config.logging.level,
  transport: config.isDevelopment
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:standard',
          ignore: 'pid,hostname',
        },
      }
    : undefined,
  serializers: pino.stdSerializers,
  base: {
    service: 'playschl-api',
    env: config.env,
  },
});
