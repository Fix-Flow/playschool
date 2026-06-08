/**
 * API Route Aggregator
 *
 * Mounts all feature-module routers under the versioned API prefix.
 * Each module owns its own sub-router for full encapsulation.
 */

import { Router } from 'express';

import { authRouter } from '../modules/auth/auth.routes';
import { studentRouter } from '../modules/students/student.routes';
import { teacherRouter } from '../modules/teachers/teacher.routes';
import { parentRouter } from '../modules/parents/parent.routes';
import { attendanceRouter } from '../modules/attendance/attendance.routes';
import { timetableRouter } from '../modules/timetable/timetable.routes';
import { assignmentRouter } from '../modules/assignments/assignment.routes';
import { examRouter } from '../modules/exams/exam.routes';
import { feeRouter } from '../modules/fees/fee.routes';
import { notificationRouter } from '../modules/notifications/notification.routes';
import { dashboardRouter } from '../modules/dashboard/dashboard.routes';
import { settingsRouter } from '../modules/settings/settings.routes';
import { classRouter } from '../modules/classes/class.routes';
import { subjectRouter } from '../modules/subjects/subject.routes';
import { academicYearRouter } from '../modules/academic-years/academic-year.routes';

export const apiRouter = Router();

// ─── Feature Module Routes ────────────────────────────
apiRouter.use('/auth', authRouter);
apiRouter.use('/students', studentRouter);
apiRouter.use('/teachers', teacherRouter);
apiRouter.use('/parents', parentRouter);
apiRouter.use('/attendance', attendanceRouter);
apiRouter.use('/timetable', timetableRouter);
apiRouter.use('/assignments', assignmentRouter);
apiRouter.use('/exams', examRouter);
apiRouter.use('/fees', feeRouter);
apiRouter.use('/notifications', notificationRouter);
apiRouter.use('/dashboard', dashboardRouter);
apiRouter.use('/settings', settingsRouter);
apiRouter.use('/classes', classRouter);
apiRouter.use('/subjects', subjectRouter);
apiRouter.use('/academic-years', academicYearRouter);
