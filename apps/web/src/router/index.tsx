/**
 * Application Router
 *
 * Defines all routes with role-based access guards.
 * Uses lazy loading for code splitting.
 */

// TODO: Implement with @tanstack/react-router or react-router-dom
// This is a placeholder for the routing configuration

import { lazy, Suspense } from 'react';
import { useAuthStore } from '@/stores/auth.store';

// Lazy-loaded pages
const LoginPage = lazy(() => import('@/pages/auth/LoginPage/LoginPage').then(m => ({ default: m.LoginPage })));
const DashboardPage = lazy(() => import('@/pages/dashboard/DashboardPage/DashboardPage').then(m => ({ default: m.DashboardPage })));

export function AppRouter() {
  useAuthStore((s) => s.isAuthenticated);

  return (
    <Suspense fallback={<div className="page-loader">Loading...</div>}>
      {/* TODO: Implement full routing */}
      <div>PlaySchl Router - TODO: Implement</div>
      <div style={{ display: 'none' }}>
        <LoginPage />
        <DashboardPage />
      </div>
    </Suspense>
  );
}
