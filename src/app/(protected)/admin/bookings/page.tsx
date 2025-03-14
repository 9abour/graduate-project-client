import BookingStats from '@/components/admin/analytics/booking-stats';
import PageLayout from '@/components/layout/page-layout';
import ExportButton from '@/components/ui/export-button';
import React from 'react';

const page = () => {
  return (
    <PageLayout>
      <div className="container">
        <h1 className="main-title-white">Bookings Analytics</h1>
      </div>

      {/* Button to export */}
      <div className="relative container flex w-full justify-end p-8">
        <ExportButton path={`analytics/export-bookings`} />
      </div>

      <BookingStats />
    </PageLayout>
  );
};

export default page;
