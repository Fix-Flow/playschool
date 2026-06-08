// notifications API Service
// TODO: Implement API calls for notifications module

import { apiClient } from './client';

export const notificationsApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get('/notifications', { params }).then((r) => r.data),

  getById: (id: string) =>
    apiClient.get('/notifications/' + id).then((r) => r.data),

  create: (data: unknown) =>
    apiClient.post('/notifications', data).then((r) => r.data),

  update: (id: string, data: unknown) =>
    apiClient.patch('/notifications/' + id, data).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete('/notifications/' + id).then((r) => r.data),
};
