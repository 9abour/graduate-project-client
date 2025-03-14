import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types/auth';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
  isCompany: boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isAdmin: false,
      isCompany: false,
      setAuth: (user, token) =>
        set({
          user,
          token,
          isAuthenticated: true,
          isAdmin: user.role === 'admin',
          isCompany: user.role === 'company',
        }),
      clearAuth: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isAdmin: false,
          isCompany: false,
        }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
