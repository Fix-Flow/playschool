/**
 * Shared Constants
 *
 * Constants used by both frontend and backend.
 */

export const USER_ROLES = ['ADMIN', 'TEACHER', 'STUDENT', 'PARENT'] as const;

export const GENDERS = ['MALE', 'FEMALE', 'OTHER'] as const;

export const DAYS_OF_WEEK = [
  'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY',
  'FRIDAY', 'SATURDAY', 'SUNDAY',
] as const;

export const BLOOD_GROUPS = [
  'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-',
] as const;

export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

export const PASSWORD_RULES = {
  MIN_LENGTH: 8,
  REQUIRE_UPPERCASE: true,
  REQUIRE_NUMBER: true,
} as const;
