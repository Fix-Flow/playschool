// fees API Service
// TODO: Implement API calls for fees module

import { apiClient } from './client';

export const feesApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get('/fees', { params }).then((r) => r.data),

  getById: (id: string) =>
    apiClient.get('/fees/' + id).then((r) => r.data),

  create: (data: unknown) =>
    apiClient.post('/fees', data).then((r) => r.data),

  update: (id: string, data: unknown) =>
    apiClient.patch('/fees/' + id, data).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete('/fees/' + id).then((r) => r.data),
};
