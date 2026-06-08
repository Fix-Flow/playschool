// assignments API Service
// TODO: Implement API calls for assignments module

import { apiClient } from './client';

export const assignmentsApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get('/assignments', { params }).then((r) => r.data),

  getById: (id: string) =>
    apiClient.get('/assignments/' + id).then((r) => r.data),

  create: (data: unknown) =>
    apiClient.post('/assignments', data).then((r) => r.data),

  update: (id: string, data: unknown) =>
    apiClient.patch('/assignments/' + id, data).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete('/assignments/' + id).then((r) => r.data),
};
