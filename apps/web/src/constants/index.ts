/**
 * Application Constants
 */

export const APP_NAME = 'PlaySchl';

export const ROLES = {
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT',
  PARENT: 'PARENT',
} as const;

export const ATTENDANCE_STATUS = {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
  LATE: 'LATE',
  EXCUSED: 'EXCUSED',
} as const;

export const FEE_STATUS = {
  PENDING: 'PENDING',
  PAID: 'PAID',
  PARTIAL: 'PARTIAL',
  OVERDUE: 'OVERDUE',
  WAIVED: 'WAIVED',
} as const;

export const SIDEBAR_MENU = [
  { label: 'Dashboard', icon: 'LayoutDashboard', path: '/dashboard', roles: ['ADMIN', 'TEACHER', 'STUDENT', 'PARENT'] },
  { label: 'Students', icon: 'GraduationCap', path: '/students', roles: ['ADMIN', 'TEACHER'] },
  { label: 'Teachers', icon: 'Users', path: '/teachers', roles: ['ADMIN'] },
  { label: 'Parents', icon: 'UserCheck', path: '/parents', roles: ['ADMIN'] },
  { label: 'Attendance', icon: 'ClipboardCheck', path: '/attendance', roles: ['ADMIN', 'TEACHER'] },
  { label: 'Timetable', icon: 'Calendar', path: '/timetable', roles: ['ADMIN', 'TEACHER', 'STUDENT'] },
  { label: 'Assignments', icon: 'BookOpen', path: '/assignments', roles: ['ADMIN', 'TEACHER', 'STUDENT'] },
  { label: 'Exams', icon: 'FileText', path: '/exams', roles: ['ADMIN', 'TEACHER', 'STUDENT', 'PARENT'] },
  { label: 'Fees', icon: 'CreditCard', path: '/fees', roles: ['ADMIN', 'PARENT'] },
  { label: 'Notifications', icon: 'Bell', path: '/notifications', roles: ['ADMIN', 'TEACHER', 'STUDENT', 'PARENT'] },
  { label: 'Settings', icon: 'Settings', path: '/settings', roles: ['ADMIN'] },
];
