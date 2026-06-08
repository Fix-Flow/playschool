/**
 * Formatting Utilities
 *
 * Date, currency, and text formatting helpers.
 */

import dayjs from 'dayjs';

export function formatDate(date: string | Date, format = 'MMM DD, YYYY'): string {
  return dayjs(date).format(format);
}

export function formatDateTime(date: string | Date): string {
  return dayjs(date).format('MMM DD, YYYY hh:mm A');
}

export function formatCurrency(amount: number, currency = 'INR'): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + '...' : str;
}

export function getInitials(firstName: string, lastName: string): string {
  return (firstName[0] + lastName[0]).toUpperCase();
}
