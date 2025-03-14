import { AddCompanyForm } from '@/components/admin/add-company-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add Company | Travel Booking',
  description: 'Add a new company to the travel booking system',
};

export default function AddCompanyPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="main-title-white">Add a New Company</h1>
          <p className="text-sm text-neutral-400">
            Add a company to allow them to create and manage tickets.
          </p>
        </div>

        <AddCompanyForm />
      </div>
    </div>
  );
}
