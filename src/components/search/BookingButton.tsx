'use client';

import { useAuthStore } from '@/store/auth-store';
import React from 'react';
import { ImTicket } from 'react-icons/im';

interface TicketCardProps {
  price: number;
  availableSeats: number;
  handleClick: () => void;
}

const BookingButton = ({
  availableSeats,
  handleClick,
  price,
}: TicketCardProps) => {
  const { isAdmin, isCompany } = useAuthStore();

  return (
    <>
      <div className="absolute right-1 top-1 w-full max-w-[100px] sm:max-w-[200px]">
        <button
          disabled={availableSeats === 0 || isAdmin || isCompany}
          className="w-full max-w-[100px] sm:max-w-[200px] h-[48px] flex items-center justify-center gap-2 border-2 mt-auto font-semibold rounded-md border-black/20 hover:bg-gradient-to-r hover:text-black transition background-gradient disabled:cursor-not-allowed"
        ></button>
      </div>

      <div className="absolute right-2 top-2 w-full max-w-[100px] sm:max-w-[200px] hover:right-1 hover:top-1 transition">
        <button
          disabled={availableSeats === 0 || isAdmin || isCompany}
          onClick={handleClick}
          className="w-full max-w-[100px] sm:max-w-[200px] h-[48px] flex items-center justify-center gap-2 mt-auto border-2 font-bold border-black/20 rounded-md hover:bg-gradient-to-r hover:text-black transition background-gradient disabled:cursor-not-allowed"
        >
          {availableSeats ? (
            <>
              ${price} <ImTicket />
            </>
          ) : (
            <>Sold Out</>
          )}
        </button>
      </div>
    </>
  );
};

export default BookingButton;
