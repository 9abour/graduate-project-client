import UsersStats from '@/components/admin/analytics/users-stats';
import PageLayout from '@/components/layout/page-layout';
import ExportButton from '@/components/ui/export-button';
import React from 'react';

export const metadata = {
  title: 'Users Analytics',
};

const page = () => {
  return (
    <PageLayout>
      <div className="container">
        <h1 className="main-title-white">Users Analytics</h1>
      </div>

      {/* Button to export */}
      <div className="relative container flex w-full justify-end p-8">
        <ExportButton path={`analytics/export-users`} />
      </div>

      <UsersStats />
    </PageLayout>
  );
};

export default page;
