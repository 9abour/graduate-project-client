import React from 'react';
import { PlaneTakeoff, PlaneLanding } from 'lucide-react';
import { format } from 'date-fns';
import { IoAirplane } from 'react-icons/io5';
import { MdOutlineWheelchairPickup } from 'react-icons/md';
import { Ticket } from '@/types/ticket';

interface BookingResponse {
  _id: string;
  userId: string;
  ticketId: Ticket;
  bookingDate: string;
  numberOfSeats: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const BookingCard = ({
  bookingResponse,
}: {
  bookingResponse: BookingResponse;
}) => {
  const { ticketId, bookingDate, numberOfSeats } = bookingResponse;

  return (
    <div className="relative min-h-[170px] p-8 rounded-lg navbar-shadow border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
      <div className="h-full flex flex-col md:flex-row justify-between gap-4 overflow-hidden">
        {/* Booking Details */}
        <div className="w-full flex flex-col h-full justify-center overflow-hidden">
          <div className="w-full flex items-center justify-between">
            {/* Booking Details */}
            <div className="w-full flex flex-col h-full justify-center overflow-hidden">
              <div className="flex items-center gap-2 mb-auto">
                <span className="font-semibold">{ticketId.from}</span>
                <span className="text-gray-500">→</span>
                <span className="font-semibold">{ticketId.to}</span>
              </div>
            </div>
            {/* Booking Date and Cancel Button */}
            <div className="flex w-2/4 items-center justify-end flex-col sm:flex-row gap-1">
              <span className="text-sm text-gray-500">Booking Date:</span>
              <span className="text-md font-semibold">
                {format(new Date(bookingDate), 'PP')}
              </span>
            </div>
          </div>

          <div className="w-full mt-4 flex items-center justify-between flex-col sm:flex-row gap-12">
            <div className="w-3/12 flex items-center flex-col gap-2 text-center">
              <PlaneTakeoff className="w-4 h-4 text-blue-500" />
              <div className="flex flex-col items-center">
                <span className="text-sm">Departure</span>
                <span className="text-md font-semibold">
                  {format(new Date(ticketId.departureTime), 'pa')}
                </span>
                {format(new Date(ticketId.departureTime), 'PP')}
              </div>
            </div>

            <div className="w-full flex justify-center items-center flex-col sm:flex-row gap-4">
              <span className="w-full h-[1px] hidden sm:block bg-black/20"></span>
              <span className="w-[1px] h-[50px] flex sm:hidden bg-black/20"></span>
              <div className="w-4/12 flex items-center justify-center flex-col gap-1">
                <span className="text-sm flex items-center gap-1">
                  {numberOfSeats} Seats
                  <MdOutlineWheelchairPickup />
                </span>
                <IoAirplane />
                <span className="text-sm text-gradient text-center">
                  {ticketId.travelCompany}
                </span>
              </div>
              <span className="w-full h-[1px] hidden sm:block bg-black/20"></span>
              <span className="w-[1px] h-[50px] flex sm:hidden bg-black/20"></span>
            </div>

            <div className="w-3/12 flex items-center flex-col gap-2 text-center">
              <PlaneLanding className="w-4 h-4 text-green-500" />
              <div className="flex flex-col items-center">
                <span className="text-sm">Arrival</span>
                <span className="text-md font-semibold">
                  {format(new Date(ticketId.arrivalTime), 'pa')}
                </span>
                {format(new Date(ticketId.arrivalTime), 'PP')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
