// teachers API Service
// TODO: Implement API calls for teachers module

import { apiClient } from './client';

export const teachersApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get('/teachers', { params }).then((r) => r.data),

  getById: (id: string) =>
    apiClient.get('/teachers/' + id).then((r) => r.data),

  create: (data: unknown) =>
    apiClient.post('/teachers', data).then((r) => r.data),

  update: (id: string, data: unknown) =>
    apiClient.patch('/teachers/' + id, data).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete('/teachers/' + id).then((r) => r.data),
};
