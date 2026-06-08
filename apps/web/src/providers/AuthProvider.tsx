/**
 * Auth Provider
 *
 * Wraps the app to provide authentication context.
 * Handles initial auth state hydration from stored tokens.
 */

import { ReactNode, useEffect, useState } from 'react';
import { useAuthStore } from '@/stores/auth.store';
import { authApi } from '@/services/api/auth.api';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const { isAuthenticated, setUser, logout } = useAuthStore();

  useEffect(() => {
    const hydrateAuth = async () => {
      if (isAuthenticated) {
        try {
          const { data } = await authApi.getProfile();
          setUser(data);
        } catch {
          logout();
        }
      }
      setIsHydrated(true);
    };

    hydrateAuth();
  }, []);

  if (!isHydrated) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="spinner" />
      </div>
    );
  }

  return <>{children}</>;
}
