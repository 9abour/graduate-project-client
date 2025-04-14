import { WobbleCard } from '@/components/ui/wobble-card';
import Image from 'next/image';
import React from 'react';
import image1 from '@public/1681038355533.png';
import image3 from '@public/AI-newsletter-image-IMG_9688.webp';

const Features = () => {
  return (
    <section className="mt-8">
      <div className="container">
        <h1 className="main-title-white">Features</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full p-4 mt-2">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Find Your Perfect Journey
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Search and compare thousands of travel options in seconds. Whether
              it's a flight, train, or bus, we’ve got you covered with the best
              routes and prices.
            </p>
          </div>
          <Image
            src={image1.src}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[5%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Book with Confidence
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Enjoy a hassle-free booking experience with secure payments and
            instant confirmations. Your next adventure is just a few clicks
            away!
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              All Your Trips in One Place
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Access your bookings anytime, anywhere. Easily view, modify, or
              cancel your trips with our user-friendly dashboard.
            </p>
          </div>
          <Image
            src={image3.src}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-0 lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
  );
};

export default Features;
