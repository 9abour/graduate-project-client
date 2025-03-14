'use client';

import { getMyBookings } from '@/api/bookings/index.api';
import BookingCard from '@/components/bookings/BookingCard';
import PageLayout from '@/components/layout/page-layout';
import { Ticket } from '@/types/ticket';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import React from 'react';

interface BookingResponse {
  _id: string;
  userId: string;
  ticketId: Ticket;
  bookingDate: string;
  numberOfSeats: number;
  isCancelled: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const page = () => {
  const {
    data: bookings,
    isLoading: isBookingsLoading,
  }: { data: BookingResponse[] | undefined; isLoading: boolean } = useQuery({
    queryKey: ['myBookings'],
    queryFn: getMyBookings,
  });

  return (
    <PageLayout>
      <div className="container">
        <h1 className="main-title-white">My Bookings</h1>
      </div>

      <div className="container !px-0">
        {/* List of tickets */}
        {isBookingsLoading ? (
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : bookings?.length ? (
          <div className="mt-8">
            {bookings.map((booking) => (
              <>
                <BookingCard key={booking._id} bookingResponse={booking} />
                <hr className="mx-8 border-gray-200 my-8 last:hidden" />
              </>
            ))}
          </div>
        ) : (
          <p className="text-center text-neutral-500 mb-4">
            No bookings found.
          </p>
        )}
      </div>
    </PageLayout>
  );
};

export default page;
