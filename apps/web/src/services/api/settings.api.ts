// settings API Service
// TODO: Implement API calls for settings module

import { apiClient } from './client';

export const settingsApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get('/settings', { params }).then((r) => r.data),

  getById: (id: string) =>
    apiClient.get('/settings/' + id).then((r) => r.data),

  create: (data: unknown) =>
    apiClient.post('/settings', data).then((r) => r.data),

  update: (id: string, data: unknown) =>
    apiClient.patch('/settings/' + id, data).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete('/settings/' + id).then((r) => r.data),
};
