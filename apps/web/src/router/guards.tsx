/**
 * Route Guards
 *
 * Higher-order components for protecting routes based on
 * authentication status and user roles.
 */

import { ReactNode } from 'react';
import { useAuthStore } from '@/stores/auth.store';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    // TODO: Redirect to login
    return <div>Please log in</div>;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    // TODO: Redirect to 403
    return <div>Access denied</div>;
  }

  return <>{children}</>;
}

export function GuestRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (isAuthenticated) {
    // TODO: Redirect to dashboard
    return <div>Already logged in</div>;
  }

  return <>{children}</>;
}
