import api from '@/lib/axios';

const getTickets = async (params: {
  from?: string;
  to?: string;
  minPrice?: string;
  maxPrice?: string;
  departureTime?: string;
  arrivalTime?: string;
}) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams.append(key, value);
    }
  });

  const response = await api.get(`/tickets/search?${searchParams.toString()}`);
  return response.data;
};

const createTicket = async (data: any) => {
  const response = await api.post('/tickets', data);
  return response.data;
};

const getCompanyTickets = async (id: string) => {
  const response = await api.get('/tickets/company/' + id);
  return response.data;
};

export { getTickets, createTicket, getCompanyTickets };
