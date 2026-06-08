import { describe, it, expect, vi } from 'vitest';
import { AuthService } from '@/modules/auth/auth.service';

describe('AuthService', () => {
  describe('register', () => {
    it('should hash password and create user', async () => {
      // TODO: Implement with mocked repository
      expect(true).toBe(true);
    });

    it('should throw ConflictError if email already exists', async () => {
      // TODO: Implement
      expect(true).toBe(true);
    });
  });

  describe('login', () => {
    it('should return tokens for valid credentials', async () => {
      // TODO: Implement
      expect(true).toBe(true);
    });

    it('should throw UnauthorizedError for invalid password', async () => {
      // TODO: Implement
      expect(true).toBe(true);
    });
  });
});
