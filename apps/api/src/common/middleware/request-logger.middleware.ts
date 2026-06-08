/**
 * Request Logger Middleware
 *
 * Logs incoming HTTP requests with method, URL, status code,
 * and response time for observability.
 */

import { Request, Response, NextFunction } from 'express';
import { logger } from '@/infrastructure/logger';

export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info({
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip,
    });
  });

  next();
}
