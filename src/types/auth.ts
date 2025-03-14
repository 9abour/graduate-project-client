export interface User {
  _id: string;
  email: string;
  name: string;
  phoneNumber: string;
  role: 'traveler' | 'admin' | 'company';
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
  phoneNumber: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
