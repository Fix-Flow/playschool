// parents API Service
// TODO: Implement API calls for parents module

import { apiClient } from './client';

export const parentsApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get('/parents', { params }).then((r) => r.data),

  getById: (id: string) =>
    apiClient.get('/parents/' + id).then((r) => r.data),

  create: (data: unknown) =>
    apiClient.post('/parents', data).then((r) => r.data),

  update: (id: string, data: unknown) =>
    apiClient.patch('/parents/' + id, data).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete('/parents/' + id).then((r) => r.data),
};
