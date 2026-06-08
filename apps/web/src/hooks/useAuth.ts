/**
 * useAuth Hook
 *
 * Convenience hook wrapping the auth store and auth API calls.
 * Provides login, register, logout with automatic state management.
 */

import { useMutation, useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@/stores/auth.store';
import { authApi } from '@/services/api/auth.api';
import toast from 'react-hot-toast';

export function useAuth() {
  const { user, isAuthenticated, login: setAuth, logout: clearAuth } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      setAuth(data.data.user, data.data.accessToken, data.data.refreshToken);
      toast.success('Welcome back!');
    },
    onError: () => {
      toast.error('Invalid credentials');
    },
  });

  const registerMutation = useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      setAuth(data.data.user, data.data.accessToken, data.data.refreshToken);
      toast.success('Account created successfully!');
    },
    onError: () => {
      toast.error('Registration failed');
    },
  });

  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      clearAuth();
      toast.success('Logged out');
    },
  });

  const profileQuery = useQuery({
    queryKey: ['auth', 'profile'],
    queryFn: authApi.getProfile,
    enabled: isAuthenticated,
  });

  return {
    user,
    isAuthenticated,
    isLoading: loginMutation.isPending || registerMutation.isPending,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
    profile: profileQuery.data,
  };
}
