/**
 * Authentication Middleware
 *
 * Verifies JWT tokens and attaches the authenticated user
 * to the request object. Supports Bearer token and cookie-based auth.
 */

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '@/config';
import { AppError } from '../errors/app-error';
import { UserRole } from '@playschl/shared';

export interface AuthenticatedUser {
  id: string;
  email: string;
  role: UserRole;
  schoolId: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedUser;
    }
  }
}

/**
 * Requires a valid JWT. Rejects unauthenticated requests with 401.
 */
export function authenticate(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  const token = extractToken(req);

  if (!token) {
    throw new AppError('Authentication required', 401, 'UNAUTHORIZED');
  }

  try {
    const payload = jwt.verify(token, config.jwt.secret) as AuthenticatedUser;
    req.user = payload;
    next();
  } catch {
    throw new AppError('Invalid or expired token', 401, 'TOKEN_INVALID');
  }
}

/**
 * Role-based authorization. Must be used after `authenticate`.
 */
export function authorize(...allowedRoles: UserRole[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      throw new AppError('Authentication required', 401, 'UNAUTHORIZED');
    }

    if (!allowedRoles.includes(req.user.role)) {
      throw new AppError(
        'Insufficient permissions',
        403,
        'FORBIDDEN'
      );
    }

    next();
  };
}

function extractToken(req: Request): string | null {
  // Bearer token
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.slice(7);
  }

  // Cookie-based
  if (req.cookies?.accessToken) {
    return req.cookies.accessToken;
  }

  return null;
}

