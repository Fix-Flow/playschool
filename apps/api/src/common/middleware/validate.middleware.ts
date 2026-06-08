/**
 * Validation Middleware Factory
 *
 * Creates Express middleware that validates request body, query,
 * or params against a Zod schema. Rejects invalid requests with 422.
 */

import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

type ValidationTarget = 'body' | 'query' | 'params';

export function validate(schema: ZodSchema, target: ValidationTarget = 'body') {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      const parsed = schema.parse(req[target]);
      req[target] = parsed; // Replace with parsed (coerced) values
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        next(error); // Handled by error-handler middleware
      } else {
        next(error);
      }
    }
  };
}
