'use client';

import PageLayout from '@/components/layout/page-layout';
import { DollarSign, Loader2, PlaneLanding, PlaneTakeoff } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/cn';
import FlightBookingHeader from '@/components/search/FlightBookingHeader';
import LocationInput from '@/components/search/LocationInput';
import ReverseButton from '@/components/search/ReverseButton';
import DatePicker from '@/components/search/DatePicker';
import PriceInput from '@/components/search/PriceInput';
import SearchButton from '@/components/search/SearchButton';
import TicketCard from '@/components/search/TicketCard';
import { useQuery } from '@tanstack/react-query';
import { getTickets } from '@/api/tickets/index.api';
import { Ticket } from '@/types/ticket';
import { useRouter } from 'next/navigation';

const page = () => {
  const initialSearchParams = new URLSearchParams(
    typeof window !== 'undefined' ? window.location.search : ''
  );

  const [searchParams, setSearchParams] = React.useState<
    Record<string, string>
  >({
    from: initialSearchParams.get('from') || '',
    to: initialSearchParams.get('to') || '',
    minPrice: initialSearchParams.get('minPrice') || '',
    maxPrice: initialSearchParams.get('maxPrice') || '',
    departureDate: initialSearchParams.get('departureDate') || '',
    arrivalDate: initialSearchParams.get('arrivalDate') || '',
  });
  const { push } = useRouter();

  const {
    data: tickets,
    refetch: refetchTickets,
    isRefetching: isLoading,
    isLoading: isTicketsLoading,
  }: {
    data: Ticket[] | undefined;
    refetch: () => void;
    isRefetching: boolean;
    isLoading: boolean;
  } = useQuery({
    queryKey: ['tickets', searchParams],
    queryFn: () => getTickets(searchParams),
  });

  const handleReset = () => {
    setSearchParams({
      from: '',
      to: '',
      minPrice: '',
      maxPrice: '',
      departureDate: '',
      arrivalDate: '',
    });

    push('/search');
  };

  const handleReverseLocations = () => {
    setSearchParams({
      ...searchParams,
      from: searchParams.to,
      to: searchParams.from,
    });
  };

  return (
    <PageLayout>
      <div className="container">
        <h1 className="main-title-white">Search Tickets</h1>
      </div>

      <div className="p-6 mt-4">
        <div className="container p-4 rounded-lg navbar-shadow bg-white">
          <div className="flex items-center justify-between">
            <FlightBookingHeader />

            <button onClick={handleReset} className="text-gray-500">
              Reset
            </button>
          </div>

          <div className="grid gap-4 rounded-2xl text-black mt-4">
            <div className={cn('relative flex flex-col md:flex-row gap-4')}>
              <LocationInput
                label="From"
                placeholder="From"
                icon={<PlaneTakeoff />}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, from: e.target.value })
                }
                value={searchParams.from}
              />
              <LocationInput
                label="To"
                placeholder="To"
                icon={<PlaneLanding />}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, to: e.target.value })
                }
                value={searchParams.to}
              />
              <ReverseButton onClick={handleReverseLocations} />
              <ReverseButton onClick={handleReverseLocations} isMobile />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <DatePicker
                label="Departure Date"
                date={
                  searchParams.departureDate
                    ? new Date(searchParams.departureDate)
                    : undefined
                }
                onSelect={(date) =>
                  date &&
                  setSearchParams({
                    ...searchParams,
                    departureDate: String(date),
                  })
                }
              />
              <DatePicker
                label="Arrival Time"
                date={
                  searchParams.arrivalDate
                    ? new Date(searchParams.arrivalDate)
                    : undefined
                }
                onSelect={(date) =>
                  date &&
                  setSearchParams({
                    ...searchParams,
                    arrivalDate: String(date),
                  })
                }
              />

              <div className="w-full flex items-center gap-4">
                <PriceInput
                  label="Min Price"
                  placeholder="0"
                  icon={<DollarSign className="text-orange-500" />}
                  id="minPrice"
                  onChange={(e) => {
                    setSearchParams({
                      ...searchParams,
                      minPrice: e.target.value,
                    });
                  }}
                  value={searchParams.minPrice}
                />
                <PriceInput
                  label="Max Price"
                  placeholder="0"
                  icon={<DollarSign className="text-red-500" />}
                  id="maxPrice"
                  onChange={(e) => {
                    setSearchParams({
                      ...searchParams,
                      maxPrice: e.target.value,
                    });
                  }}
                  value={searchParams.maxPrice}
                />
              </div>
              <SearchButton onClick={refetchTickets} isLoading={isLoading} />
            </div>
          </div>
        </div>

        {/* List of tickets */}
        {isTicketsLoading ? (
          <div className="container flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : tickets?.length ? (
          <div className="container mt-8">
            {tickets.map((ticket) => (
              <React.Fragment key={ticket._id}>
                <TicketCard {...ticket} />
                <hr className="container mx-8 border-gray-200 my-8 last:hidden" />
              </React.Fragment>
            ))}
          </div>
        ) : (
          <>
            <hr className="container mx-8 border-gray-200 my-8 last:hidden" />
            <p className="container text-center text-neutral-500">
              No tickets found.
            </p>
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default page;
