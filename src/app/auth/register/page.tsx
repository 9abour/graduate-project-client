import { RegisterForm } from '@/components/auth/register-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | Travel Booking',
  description: 'Create a new travel booking account',
};

export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="main-title-white">Create Your Account</h1>
          <p className="text-sm text-neutral-400">
            Join us today to start booking your next adventure!
          </p>
        </div>

        <RegisterForm />
      </div>
    </div>
  );
}
