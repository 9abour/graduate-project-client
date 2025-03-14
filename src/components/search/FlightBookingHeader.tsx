import { IoAirplane } from 'react-icons/io5';

const FlightBookingHeader = () => {
  return (
    <div className="flex items-center gap-2 text-[#000300]">
      <IoAirplane />
      <h3 className="font-bold">BOOK YOUR FLIGHT</h3>
    </div>
  );
};

export default FlightBookingHeader;
