import api from '@/lib/axios';

const getBookings = async () => {
  const response = await api.get('/booking');
  return response.data;
};

const getMyBookings = async () => {
  const response = await api.get('/bookings/my-bookings');
  return response.data;
};

const getCompanyBookings = async (travelCompany: string) => {
  const response = await api.get(`/bookings/company-bookings`, {
    params: { travelCompany },
  });
  return response.data;
};

const bookTicket = async (ticketId: string) => {
  const response = await api.post('/bookings', {
    ticketId,
    numberOfSeats: 1,
  });
  return response.data;
};

export { getBookings, bookTicket, getCompanyBookings, getMyBookings };
