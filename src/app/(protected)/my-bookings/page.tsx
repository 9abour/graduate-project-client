import MyBookingsClient from '@/app/(protected)/my-bookings/MyBookingsClient';
import React from 'react';

export const metadata = {
  title: 'My Bookings',
};

const page = () => {
  return <MyBookingsClient />;
};

export default page;
