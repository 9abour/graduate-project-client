import HeroForm from '@/components/home/HeroForm';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[1200px] sm:h-screen pt-[50px] sm:pt-[100px] sm:p-4 mx-auto bg-black">
      <div className="flex h-full relative rounded-2xl overflow-hidden z-10">
        <div className="flex flex-row items-center justify-center h-full sm:h-[calc(100vh-120px)] rounded-2xl bg-transparent overflow-hidden relative w-full shadow-2xl">
          <div className="relative container !px-0 flex flex-col lg:flex-row justify-center rounded-2xl overflow-hidden">
            <HeroForm />
            <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          </div>
        </div>
      </div>

      <div className="absolute w-full bottom-0 left-0 h-full pointer-events-none select-none bg-black/80 z-0" />
    </div>
  );
};

export default Hero;
