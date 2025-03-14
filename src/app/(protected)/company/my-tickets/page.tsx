'use client';

import React from 'react';
import PageLayout from '@/components/layout/page-layout';
import { PlaneTakeoff, PlaneLanding, DollarSign, Loader2 } from 'lucide-react';
import LocationInput from '@/components/search/LocationInput';
import DatePicker from '@/components/search/DatePicker';
import PriceInput from '@/components/search/PriceInput';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTicket, getCompanyTickets } from '@/api/tickets/index.api';
import TicketCard from '@/components/search/TicketCard';
import { useAuthStore } from '@/store/auth-store';
import { toast } from 'sonner';
import { MdOutlineWheelchairPickup } from 'react-icons/md';
import { Ticket } from '@/types/ticket';
import { ImTicket } from 'react-icons/im';

interface TicketFormData {
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  availableSeats: number;
  travelCompany: string;
}

const CompanyTicketsPage = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();

  const [formData, setFormData] = React.useState<TicketFormData>({
    from: '',
    to: '',
    departureTime: '',
    arrivalTime: '',
    price: 0,
    availableSeats: 0,
    travelCompany: user?.name || '',
  });

  const {
    data: tickets,
    isLoading: isTicketsLoading,
  }: { data: Ticket[] | undefined; isLoading: boolean } = useQuery({
    queryKey: ['companyTickets', user?.name],
    queryFn: () => getCompanyTickets(user?.name || ''),
  });

  const mutation = useMutation({
    mutationFn: createTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['companyTickets'] });
      toast.success('Ticket created successfully!');
      setFormData({
        from: '',
        to: '',
        departureTime: '',
        arrivalTime: '',
        price: 0,
        availableSeats: 0,
        travelCompany: user?.name || '',
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleDateChange = (date: Date | undefined, field: string) => {
    if (date) {
      setFormData({ ...formData, [field]: date.toISOString() });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <PageLayout>
      <div className="container">
        <h1 className="main-title-white">Create Tickets</h1>
      </div>

      <div className="p-6 mt-4">
        <div className="container p-4 rounded-lg navbar-shadow">
          <div className="flex items-center gap-2 text-[#000300]">
            <ImTicket />
            <h3 className="font-bold">Create New Ticket</h3>
          </div>
          {/* Form for adding a new ticket */}
          <div className="grid gap-4 rounded-2xl text-black mt-4">
            <div className="relative flex flex-col md:flex-row gap-4">
              <LocationInput
                label="From"
                placeholder="From"
                icon={<PlaneTakeoff />}
                onChange={handleChange}
                value={formData.from}
              />
              <LocationInput
                label="To"
                placeholder="To"
                icon={<PlaneLanding />}
                onChange={handleChange}
                value={formData.to}
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <DatePicker
                label="Departure Date"
                date={
                  formData.departureTime
                    ? new Date(formData.departureTime)
                    : undefined
                }
                onSelect={(date) => handleDateChange(date, 'departureTime')}
              />
              <DatePicker
                label="Arrival Date"
                date={
                  formData.arrivalTime
                    ? new Date(formData.arrivalTime)
                    : undefined
                }
                onSelect={(date) => handleDateChange(date, 'arrivalTime')}
              />

              <PriceInput
                label="Available Seats"
                placeholder="0"
                icon={<MdOutlineWheelchairPickup />}
                id="availableSeats"
                onChange={handleChange}
                value={formData.availableSeats.toString()}
              />

              <PriceInput
                label="Price"
                placeholder="0"
                icon={<DollarSign className="text-orange-500" />}
                id="price"
                onChange={handleChange}
                value={formData.price.toString()}
              />
            </div>

            <div className="mt-4">
              <button
                onClick={handleSubmit}
                className="w-full h-[48px] flex items-center justify-center mt-auto border-2 font-semibold border-black/20 rounded-md hover:bg-gradient-to-r hover:text-black transition background-gradient"
              >
                {mutation.isPending ? 'Creating...' : 'Add'}
              </button>
            </div>
          </div>
        </div>

        <div className="container mt-16">
          <h1 className="main-title-white">My Tickets</h1>
        </div>
        <div className="container !px-0">
          {/* List of tickets */}
          {isTicketsLoading ? (
            <div className="flex justify-center">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : tickets?.length ? (
            <div className="mt-8">
              {tickets.map((ticket) => (
                <React.Fragment key={ticket._id}>
                  <TicketCard {...ticket} />
                  <hr className="mx-8 border-gray-200 my-8 last:hidden" />
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p className="text-center text-neutral-500 mb-4">
              No tickets found.
            </p>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default CompanyTicketsPage;
