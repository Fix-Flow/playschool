// timetable API Service
// TODO: Implement API calls for timetable module

import { apiClient } from './client';

export const timetableApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get('/timetable', { params }).then((r) => r.data),

  getById: (id: string) =>
    apiClient.get('/timetable/' + id).then((r) => r.data),

  create: (data: unknown) =>
    apiClient.post('/timetable', data).then((r) => r.data),

  update: (id: string, data: unknown) =>
    apiClient.patch('/timetable/' + id, data).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete('/timetable/' + id).then((r) => r.data),
};
