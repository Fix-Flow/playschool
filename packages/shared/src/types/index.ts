/**
 * Shared Types
 *
 * TypeScript interfaces and types shared between frontend and backend.
 * This is the single source of truth for the domain model shapes.
 */

// ─── Enums ────────────────────────────────────────────────

export type UserRole = 'ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT';
export type Gender = 'MALE' | 'FEMALE' | 'OTHER';
export type AttendanceStatus = 'PRESENT' | 'ABSENT' | 'LATE' | 'EXCUSED';
export type FeeStatus = 'PENDING' | 'PAID' | 'PARTIAL' | 'OVERDUE' | 'WAIVED';
export type AssignmentStatus = 'DRAFT' | 'PUBLISHED' | 'CLOSED';
export type SubmissionStatus = 'PENDING' | 'SUBMITTED' | 'GRADED' | 'LATE';
export type ExamStatus = 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
export type NotificationType = 'ANNOUNCEMENT' | 'ALERT' | 'REMINDER' | 'MESSAGE';
export type DayOfWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

// ─── Base Entity ──────────────────────────────────────────

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// ─── User ─────────────────────────────────────────────────

export interface User extends BaseEntity {
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string;
  avatar?: string;
  isActive: boolean;
  schoolId?: string;
}

// ─── Student ──────────────────────────────────────────────

export interface Student extends BaseEntity {
  userId: string;
  admissionNumber: string;
  dateOfBirth: string;
  gender: Gender;
  bloodGroup?: string;
  address?: string;
  classId?: string;
  sectionId?: string;
  user?: User;
}

// ─── Teacher ──────────────────────────────────────────────

export interface Teacher extends BaseEntity {
  userId: string;
  employeeId: string;
  dateOfBirth?: string;
  gender?: Gender;
  qualification?: string;
  experience?: number;
  specialization?: string;
  dateOfJoining: string;
  user?: User;
}

// ─── Parent ───────────────────────────────────────────────

export interface Parent extends BaseEntity {
  userId: string;
  occupation?: string;
  relationship?: string;
  user?: User;
  students?: Student[];
}

// ─── Academic ─────────────────────────────────────────────

export interface School extends BaseEntity {
  name: string;
  code: string;
  address?: string;
  phone?: string;
  email?: string;
  logo?: string;
  website?: string;
  isActive: boolean;
}

export interface AcademicYear extends BaseEntity {
  name: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  schoolId: string;
}

export interface Class extends BaseEntity {
  name: string;
  grade: number;
  schoolId: string;
  classTeacherId?: string;
}

export interface Section extends BaseEntity {
  name: string;
  classId: string;
  capacity: number;
}

export interface Subject extends BaseEntity {
  name: string;
  code: string;
  schoolId: string;
}

// ─── Attendance ───────────────────────────────────────────

export interface Attendance extends BaseEntity {
  studentId: string;
  date: string;
  status: AttendanceStatus;
  remarks?: string;
  markedBy: string;
}

// ─── Timetable ────────────────────────────────────────────

export interface TimetableSlot extends BaseEntity {
  timetableId: string;
  dayOfWeek: DayOfWeek;
  startTime: string;
  endTime: string;
  subjectId?: string;
  teacherId?: string;
  room?: string;
}

// ─── Assignments ──────────────────────────────────────────

export interface Assignment extends BaseEntity {
  title: string;
  description?: string;
  subjectId: string;
  classId: string;
  teacherId: string;
  dueDate: string;
  maxMarks?: number;
  status: AssignmentStatus;
  attachments: string[];
}

export interface AssignmentSubmission extends BaseEntity {
  assignmentId: string;
  studentId: string;
  content?: string;
  attachments: string[];
  status: SubmissionStatus;
  marks?: number;
  feedback?: string;
  submittedAt?: string;
}

// ─── Exams ────────────────────────────────────────────────

export interface Exam extends BaseEntity {
  name: string;
  subjectId: string;
  teacherId: string;
  academicYearId: string;
  examDate: string;
  startTime?: string;
  endTime?: string;
  totalMarks: number;
  passingMarks: number;
  status: ExamStatus;
}

export interface ExamResult extends BaseEntity {
  examId: string;
  studentId: string;
  marksObtained: number;
  grade?: string;
  remarks?: string;
}

// ─── Fees ─────────────────────────────────────────────────

export interface FeeStructure extends BaseEntity {
  name: string;
  amount: number;
  classId: string;
  schoolId: string;
  dueDate: string;
  isActive: boolean;
}

export interface FeePayment extends BaseEntity {
  studentId: string;
  feeStructureId: string;
  amountPaid: number;
  status: FeeStatus;
  paymentDate?: string;
  paymentMethod?: string;
  transactionId?: string;
  receiptNumber?: string;
}

// ─── Notifications ────────────────────────────────────────

export interface Notification extends BaseEntity {
  title: string;
  message: string;
  type: NotificationType;
  senderId: string;
  isGlobal: boolean;
}

// ─── API Types ────────────────────────────────────────────

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}
