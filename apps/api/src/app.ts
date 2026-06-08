/**
 * Express Application Factory
 *
 * Assembles middleware stack and mounts all feature module routers.
 * Separated from main.ts for testability.
 */

import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import { config } from './config';
import { requestLogger } from './common/middleware/request-logger.middleware';
import { errorHandler } from './common/middleware/error-handler.middleware';
import { notFoundHandler } from './common/middleware/not-found.middleware';
import { rateLimiter } from './common/middleware/rate-limiter.middleware';
import { apiRouter } from './routes';

export function createApp(): Express {
  const app = express();

  // ─── Global Middleware ──────────────────────────────────
  app.use(helmet());
  app.use(cors({ origin: config.corsOrigin, credentials: true }));
  app.use(compression());
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(requestLogger);
  app.use(rateLimiter);

  // ─── Health Check ───────────────────────────────────────
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // ─── API Routes ─────────────────────────────────────────
  app.use(config.apiPrefix, apiRouter);

  // ─── Error Handling ─────────────────────────────────────
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
