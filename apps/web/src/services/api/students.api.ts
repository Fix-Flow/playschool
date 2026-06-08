// students API Service
// TODO: Implement API calls for students module

import { apiClient } from './client';

export const studentsApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get('/students', { params }).then((r) => r.data),

  getById: (id: string) =>
    apiClient.get('/students/' + id).then((r) => r.data),

  create: (data: unknown) =>
    apiClient.post('/students', data).then((r) => r.data),

  update: (id: string, data: unknown) =>
    apiClient.patch('/students/' + id, data).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete('/students/' + id).then((r) => r.data),
};
