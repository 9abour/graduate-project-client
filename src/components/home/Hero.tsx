import HeroForm from '@/components/home/HeroForm';
import { GlobeDemo } from '@/components/ui/GlobeDemo';
import React from 'react';
import WorldMap from '@/components/ui/world-map';

const Hero = () => {
  return (
    <div className="relative w-full h-[1200px] sm:h-screen pt-[50px] sm:pt-[100px] sm:p-4 mx-auto bg-black">
      <div className="flex h-full relative rounded-2xl overflow-hidden z-10">
        <div className="flex flex-row items-center justify-center h-full sm:h-[calc(100vh-120px)] rounded-2xl bg-transparent overflow-hidden relative w-full shadow-2xl">
          <div className="relative container !px-0 flex flex-col lg:flex-row justify-center rounded-2xl overflow-hidden">
            <GlobeDemo />
            <HeroForm />
            <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          </div>
        </div>
      </div>

      <div className="absolute w-full h-full top-0 left-0">
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </div>
      <div className="absolute w-full bottom-0 left-0 h-full pointer-events-none select-none bg-black/80 z-0" />
    </div>
  );
};

export default Hero;
