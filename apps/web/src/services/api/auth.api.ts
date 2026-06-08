/**
 * Auth API Service
 *
 * API calls for authentication: login, register, refresh, logout.
 */

import { apiClient } from './client';
import type { LoginInput, RegisterInput } from '@playschl/shared';

export const authApi = {
  login: (data: LoginInput) =>
    apiClient.post('/auth/login', data).then((r) => r.data),

  register: (data: RegisterInput) =>
    apiClient.post('/auth/register', data).then((r) => r.data),

  refreshToken: (refreshToken: string) =>
    apiClient.post('/auth/refresh', { refreshToken }).then((r) => r.data),

  logout: () =>
    apiClient.post('/auth/logout').then((r) => r.data),

  getProfile: () =>
    apiClient.get('/auth/me').then((r) => r.data),

  forgotPassword: (email: string) =>
    apiClient.post('/auth/forgot-password', { email }).then((r) => r.data),

  resetPassword: (token: string, password: string) =>
    apiClient.post('/auth/reset-password', { token, password }).then((r) => r.data),
};

