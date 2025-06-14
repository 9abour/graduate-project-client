'use client';

import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/cn';
import {
  ArrowDownUp,
  CalendarDays,
  DollarSign,
  PlaneLanding,
  PlaneTakeoff,
} from 'lucide-react';
import React from 'react';
import { format } from 'date-fns';

const HeroForm = () => {
  const [searchParams, setSearchParams] = React.useState<
    Record<string, string>
  >({
    from: '',
    to: '',
    minPrice: '',
    maxPrice: '',
    departureTime: '',
    arrivalTime: '',
  });

  const handleReverseLocations = () => {
    setSearchParams({
      ...searchParams,
      from: searchParams.to,
      to: searchParams.from,
    });
  };

  const handleSearch = () => {
    const validSearchParams = Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value)
    );

    if (typeof window !== 'undefined') {
      window.location.href = `/search?${new URLSearchParams(
        validSearchParams
      )}`;
    }
  };

  return (
    <div className="relative max-w-[800px] w-full h-full md:h-[40rem] rounded-4xl mt-4 sm:mt-0 p-4 z-50">
      <div className="w-full h-full bg-black/60 backdrop-blur-2xl rounded-2xl sm:p-4 shadow-2xl">
        <div className="grid gap-4 bg-black/90 rounded-2xl p-4 text-white border border-white/40">
          <div className={cn('relative flex gap-4 flex-col')}>
            <div>
              <label htmlFor="from">From</label>
              <div className="flex border-2 border-white/20 rounded-md mt-1">
                <div className="w-[45px] h-[45px] flex items-center justify-center border-r-2 py-2 border-white/20">
                  <PlaneTakeoff />
                </div>

                <input
                  type="text"
                  id="from"
                  placeholder="From"
                  value={searchParams.from}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, from: e.target.value })
                  }
                  className="w-full bg-transparent outline-none p-2"
                />
              </div>
            </div>
            <button
              onClick={handleReverseLocations}
              className="absolute top-2/4 -translate-y-2/4 mt-[14px] right-4 w-[55px] h-[55px] flex items-center justify-center border-2 border-white/20 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 hover:bg-white hover:text-black transition"
            >
              <ArrowDownUp />
            </button>
            <div>
              <label htmlFor="to">To</label>
              <div className="flex border-2 border-white/20 rounded-md mt-1">
                <div className="w-[45px] h-[45px] flex items-center justify-center border-r-2 py-2 border-white/20">
                  <PlaneLanding />
                </div>

                <input
                  type="text"
                  id="to"
                  placeholder="To"
                  value={searchParams.to}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, to: e.target.value })
                  }
                  className="w-full bg-transparent outline-none p-2"
                />
              </div>
            </div>
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <div className="w-full">
                <label htmlFor="departureTime">Departure Date</label>

                <button className="w-full flex items-center border-2 border-white/20 rounded-md mt-1">
                  <div className="w-[45px] h-[45px] flex items-center justify-center border-r-2 py-2 border-white/20">
                    <CalendarDays />
                  </div>

                  <span className="mx-2">
                    {searchParams.departureTime
                      ? format(searchParams.departureTime, 'PPP')
                      : 'Pick a date'}
                  </span>
                </button>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={new Date(searchParams.departureTime || '')}
                onSelect={(date) =>
                  date &&
                  setSearchParams({
                    ...searchParams,
                    departureTime: String(date),
                  })
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <div className="w-full">
                <label htmlFor="arrivalTime">Arrival Time</label>

                <button className="w-full flex items-center border-2 border-white/20 rounded-md mt-1">
                  <div className="w-[45px] h-[45px] flex items-center justify-center border-r-2 py-2 border-white/20">
                    <CalendarDays />
                  </div>

                  <span className="mx-2">
                    {searchParams.arrivalTime
                      ? format(searchParams.arrivalTime, 'PPP')
                      : 'Pick a date'}
                  </span>
                </button>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={new Date(searchParams.arrivalTime || '')}
                onSelect={(date) =>
                  date &&
                  setSearchParams({
                    ...searchParams,
                    arrivalTime: String(date),
                  })
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="minPrice">Min Price</label>
              <div className="flex border-2 border-white/20 rounded-md mt-1">
                <div className="w-[45px] h-[45px] flex items-center justify-center border-r-2 py-2 border-white/20 text-orange-500">
                  <DollarSign />
                </div>

                <input
                  type="number"
                  id="minPrice"
                  placeholder="0"
                  value={searchParams.minPrice}
                  onChange={(e) =>
                    setSearchParams({
                      ...searchParams,
                      minPrice: e.target.value,
                    })
                  }
                  className="w-full bg-transparent outline-none p-2"
                />
              </div>
            </div>
            <div>
              <label htmlFor="maxPrice">Max Price</label>
              <div className="flex border-2 border-white/20 rounded-md mt-1">
                <div className="w-[45px] h-[45px] flex items-center justify-center border-r-2 py-2 border-white/20 text-red-500">
                  <DollarSign />
                </div>

                <input
                  type="number"
                  id="maxPrice"
                  placeholder="0"
                  value={searchParams.maxPrice}
                  onChange={(e) =>
                    setSearchParams({
                      ...searchParams,
                      maxPrice: e.target.value,
                    })
                  }
                  className="w-full bg-transparent outline-none p-2"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="w-full h-[45px] flex items-center justify-center border-2 font-semibold border-white/20 rounded-md mt-1 hover:bg-gradient-to-r hover:text-black transition bg-gradient-to-r from-red-500 to-orange-500"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
