import api from '@/lib/axios';
import { LoginCredentials, RegisterData } from '@/types/auth';

const register = async (data: RegisterData) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

const login = async (credentials: LoginCredentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export { register, login };
