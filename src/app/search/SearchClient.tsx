'use client';

import PageLayout from '@/components/layout/page-layout';
import { DollarSign, Loader2, PlaneLanding, PlaneTakeoff } from 'lucide-react';
import React, { useEffect } from 'react';
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

const SearchClient = () => {
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
    departureTime: initialSearchParams.get('departureTime') || '',
    arrivalTime: initialSearchParams.get('arrivalTime') || '',
  });

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
    queryKey: ['tickets'],
    queryFn: () => getTickets(searchParams),
  });

  const handleReset = async () => {
    setSearchParams({
      from: '',
      to: '',
      minPrice: '',
      maxPrice: '',
      departureTime: '',
      arrivalTime: '',
    });
  };

  const handleReverseLocations = () => {
    setSearchParams({
      ...searchParams,
      from: searchParams.to,
      to: searchParams.from,
    });
  };

  useEffect(() => {
    if (!Object.values(searchParams).some(Boolean as unknown as any)) {
      refetchTickets();
    }
  }, [searchParams, refetchTickets]);

  return (
    <PageLayout>
      <div className="container">
        <h1 className="main-title-white">Search Tickets</h1>
      </div>

      <div className="p-4 sm:p-6 mt-4">
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
                  searchParams.departureTime
                    ? new Date(searchParams.departureTime)
                    : undefined
                }
                onSelect={(date) =>
                  date &&
                  setSearchParams({
                    ...searchParams,
                    departureTime: String(date),
                  })
                }
              />
              <DatePicker
                label="Arrival Time"
                date={
                  searchParams.arrivalTime
                    ? new Date(searchParams.arrivalTime)
                    : undefined
                }
                onSelect={(date) =>
                  date &&
                  setSearchParams({
                    ...searchParams,
                    arrivalTime: String(date),
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
          <div className="container flex justify-center mt-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : tickets?.length ? (
          <div className="container !px-0 mt-8">
            {tickets.map((ticket) => (
              <React.Fragment key={ticket._id}>
                <TicketCard {...ticket} />
                <hr className="container mx-8 border-gray-200 my-8 last:hidden" />
              </React.Fragment>
            ))}
          </div>
        ) : (
          <>
            <hr className="container mx-8 border-gray-200 my-6 last:hidden" />
            <p className="container text-center text-neutral-500">
              No tickets found.
            </p>
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default SearchClient;
