/**
 * Cache Service
 *
 * High-level caching abstraction over Redis for common patterns:
 * get/set with TTL, invalidation, and cache-aside pattern.
 */

import { redis } from './redis-client';
import { logger } from '../logger';

export class CacheService {
  private readonly defaultTTL = 3600; // 1 hour

  async get<T>(key: string): Promise<T | null> {
    const data = await redis.get(key);
    if (!data) return null;
    return JSON.parse(data) as T;
  }

  async set<T>(key: string, value: T, ttlSeconds?: number): Promise<void> {
    const ttl = ttlSeconds ?? this.defaultTTL;
    await redis.set(key, JSON.stringify(value), 'EX', ttl);
  }

  async del(key: string): Promise<void> {
    await redis.del(key);
  }

  async invalidatePattern(pattern: string): Promise<void> {
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(...keys);
      logger.debug({ pattern, count: keys.length }, 'Cache invalidated');
    }
  }

  /**
   * Cache-aside pattern: return cached value or compute, cache, and return.
   */
  async getOrSet<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttlSeconds?: number
  ): Promise<T> {
    const cached = await this.get<T>(key);
    if (cached !== null) return cached;

    const value = await fetcher();
    await this.set(key, value, ttlSeconds);
    return value;
  }
}

export const cacheService = new CacheService();
