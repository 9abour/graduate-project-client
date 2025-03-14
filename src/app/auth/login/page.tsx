import { LoginForm } from '@/components/auth/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Travel Booking',
  description: 'Login to your travel booking account',
};

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="main-title-white">Welcome back</h1>
          <p className="text-sm text-neutral-400">
            Log in to manage your bookings and explore new travel opportunities.
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
