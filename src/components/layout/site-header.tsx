import Link from 'next/link';
import { MainNav } from '@/components/layout/main-nav';
import { Button } from '@/components/ui/button';
import { Plane } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center gap-2">
          <Plane className="h-6 w-6" />
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Travel Booking</span>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <MainNav />
        </div>
        {/* Mobile menu toggle here */}
      </div>
    </header>
  );
}
