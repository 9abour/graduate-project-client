'use client';

import PageLayout from '@/components/layout/page-layout';

import { DollarSign, PlaneLanding, PlaneTakeoff } from 'lucide-react';
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

const page = () => {
  const initialSearchParams = new URLSearchParams(window.location.search);

  const [departureDate, setDepartureDate] = React.useState<Date>();
  const [arrivalDate, setArrivalDate] = React.useState<Date>();
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

  const {
    data: tickets,
    refetch: refetchTickets,
    isRefetching: isLoading,
  }: {
    data: Ticket[] | undefined;
    refetch: () => void;
    isRefetching: boolean;
  } = useQuery({
    queryKey: ['tickets'],
    queryFn: () => getTickets(searchParams),
  });

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
          <FlightBookingHeader />
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
                date={departureDate}
                onSelect={(date) => {
                  setDepartureDate(date);

                  if (!date) return;

                  setSearchParams({
                    ...searchParams,
                    departureDate: String(date),
                  });
                }}
              />
              <DatePicker
                label="Arrival Time"
                date={arrivalDate}
                onSelect={(date) => {
                  setArrivalDate(date);

                  if (!date) return;

                  setSearchParams({
                    ...searchParams,
                    arrivalDate: String(date),
                  });
                }}
              />

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
              <SearchButton onClick={refetchTickets} isLoading={isLoading} />
            </div>
          </div>
        </div>

        {tickets?.length ? (
          <div className="container !px-0 mt-12">
            {tickets.map((ticket) => (
              <>
                <TicketCard key={ticket._id} {...ticket} id={ticket._id} />
                <hr className="mx-8 border-gray-200 my-8 last:hidden" />
              </>
            ))}
          </div>
        ) : null}
      </div>
    </PageLayout>
  );
};

export default page;
