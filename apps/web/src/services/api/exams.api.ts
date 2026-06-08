// exams API Service
// TODO: Implement API calls for exams module

import { apiClient } from './client';

export const examsApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get('/exams', { params }).then((r) => r.data),

  getById: (id: string) =>
    apiClient.get('/exams/' + id).then((r) => r.data),

  create: (data: unknown) =>
    apiClient.post('/exams', data).then((r) => r.data),

  update: (id: string, data: unknown) =>
    apiClient.patch('/exams/' + id, data).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete('/exams/' + id).then((r) => r.data),
};
