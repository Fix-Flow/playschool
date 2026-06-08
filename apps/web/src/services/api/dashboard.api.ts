// dashboard API Service
// TODO: Implement API calls for dashboard module

import { apiClient } from './client';

export const dashboardApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get('/dashboard', { params }).then((r) => r.data),

  getById: (id: string) =>
    apiClient.get('/dashboard/' + id).then((r) => r.data),

  create: (data: unknown) =>
    apiClient.post('/dashboard', data).then((r) => r.data),

  update: (id: string, data: unknown) =>
    apiClient.patch('/dashboard/' + id, data).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete('/dashboard/' + id).then((r) => r.data),
};
