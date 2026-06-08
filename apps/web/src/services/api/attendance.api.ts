// attendance API Service
// TODO: Implement API calls for attendance module

import { apiClient } from './client';

export const attendanceApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get('/attendance', { params }).then((r) => r.data),

  getById: (id: string) =>
    apiClient.get('/attendance/' + id).then((r) => r.data),

  create: (data: unknown) =>
    apiClient.post('/attendance', data).then((r) => r.data),

  update: (id: string, data: unknown) =>
    apiClient.patch('/attendance/' + id, data).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete('/attendance/' + id).then((r) => r.data),
};
