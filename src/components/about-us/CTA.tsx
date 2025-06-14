'use client';

import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/auth-store';
import React from 'react';

const CTA = () => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to revolutionize your travel experience?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers and companies already benefiting from
            our unified platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              className="px-8 py-6 text-lg !transition"
            >
              Sign Up Now
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg bg-transparent border-white text-white hover:bg-white/10 !transition"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
