import React from 'react';
import { PlaneTakeoff, PlaneLanding, Book } from 'lucide-react';
import { format } from 'date-fns';
import { IoAirplane } from 'react-icons/io5';
import { MdOutlineWheelchairPickup } from 'react-icons/md';
import { bookTicket } from '@/api/bookings/index.api';
import { toast } from 'sonner';
import BookingButton from '@/components/search/BookingButton';
import { useQueryClient } from '@tanstack/react-query';

interface TicketCardProps {
  _id: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  travelCompany: string;
  price: number;
  availableSeats: number;
}

const TicketCard = ({
  _id,
  from,
  to,
  departureTime,
  arrivalTime,
  travelCompany,
  price,
  availableSeats,
}: TicketCardProps) => {
  const queryClient = useQueryClient();

  const handleClick = async () => {
    try {
      await bookTicket(_id);
      queryClient.invalidateQueries({ queryKey: ['myBookings'] });
      toast.success('Ticket booked successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative min-h-[170px] p-8 rounded-lg navbar-shadow bg-white border border-gray-200 hover:shadow-md overflow-hidden transition">
      <div className="h-full flex flex-col md:flex-row justify-between gap-4 overflow-hidden">
        {/* Flight Details */}
        <div className="w-full flex flex-col h-full justify-center overflow-hidden">
          <div className="flex items-center gap-2 mb-auto">
            <span className="font-semibold">{from}</span>
            <span className="text-gray-500">→</span>
            <span className="font-semibold">{to}</span>
          </div>

          <div className="w-full mt-4 flex-col sm:flex-row flex items-center justify-between gap-4 sm:gap-12">
            <div className="w-full sm:w-3/12 flex items-center flex-col gap-2">
              <PlaneTakeoff className="w-4 h-4 text-blue-500" />
              <div className="flex flex-col items-center">
                <span className="text-sm">Departure</span>
                {/* time */}
                <span className="text-md font-semibold">
                  {format(departureTime, 'pa')}
                </span>
                {/* date */}
                {format(departureTime, 'PP')}
              </div>
            </div>

            <div className="w-full flex-col sm:flex-row flex justify-center items-center gap-4">
              <span className="w-full h-[1px] hidden sm:block bg-black/20"></span>
              <span className="w-[1px] h-[50px] flex sm:hidden bg-black/20"></span>
              <div className="w-full sm:w-4/12 flex items-center justify-center flex-col gap-1">
                <span className="text-sm flex items-center gap-1">
                  {' '}
                  {availableSeats} Seats
                  <MdOutlineWheelchairPickup />
                </span>
                <IoAirplane className="rotate-90 sm:rotate-0" />
                <span className="text-sm text-gradient">{travelCompany}</span>
              </div>
              <span className="w-full h-[1px] hidden sm:block bg-black/20"></span>
              <span className="w-[1px] h-[50px] flex sm:hidden bg-black/20"></span>
            </div>

            <div className="w-full sm:w-3/12 flex items-center flex-col gap-2">
              <PlaneLanding className="w-4 h-4 text-green-500" />
              <div className="flex flex-col items-center">
                <span className="text-sm">Arrival</span>
                {/* time */}
                <span className="text-md font-semibold">
                  {format(arrivalTime, 'pa')}
                </span>
                {/* date */}
                {format(arrivalTime, 'PP')}
              </div>
            </div>
          </div>

          <BookingButton
            handleClick={handleClick}
            availableSeats={availableSeats}
            price={price}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
