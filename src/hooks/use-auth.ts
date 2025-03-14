import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoginCredentials, RegisterData } from '@/types/auth';
import { useAuthStore } from '@/store/auth-store';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/lib/axios';
import { login } from '@/api/auth/index.api';
import { toast } from 'sonner';

export function useLogin() {
  const { setAuth } = useAuthStore();
  // const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: async (credentials: LoginCredentials) => login(credentials),
    onSuccess: (data) => {
      setAuth(data.user, data.token);
      console.log(data);
      localStorage.setItem('token', data.access_token);

      toast(`Welcome back, ${data.user.name}!`);

      if (data.user.role === 'admin') {
        router.push('/admin/tickets');
      } else if (data.user.role === 'traveler') {
        router.push('/');
      } else {
        router.push('/company/my-tickets');
      }
    },
    onError: (error: any) => {
      // toast({
      //   variant: 'destructive',
      //   title: 'Login failed',
      //   description: error.response?.data?.message || 'Please check your credentials and try again',
      // });
    },
  });
}

export function useRegister() {
  // const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: RegisterData) => {
      const response = await axiosInstance.post('/auth/register', data);
      return response.data;
    },
    onSuccess: () => {
      // toast({
      //   title: 'Registration successful',
      //   description: 'Please log in with your new account',
      // });
      router.push('/auth/login');
    },
    onError: (error: any) => {
      // toast({
      //   variant: 'destructive',
      //   title: 'Registration failed',
      //   description:
      //     error.response?.data?.message ||
      //     'Please check your information and try again',
      // });
    },
  });
}

export function useLogout() {
  const { clearAuth } = useAuthStore();
  const queryClient = useQueryClient();
  const router = useRouter();
  // const { toast } = useToast();

  return () => {
    clearAuth();
    localStorage.removeItem('token');
    queryClient.clear();

    // toast({
    //   title: 'Logged out',
    //   description: 'You have been successfully logged out',
    // });

    router.push('/');
  };
}
