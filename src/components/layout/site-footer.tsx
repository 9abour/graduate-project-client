import { Plane } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <Plane className="h-5 w-5" />
          <p className="text-center text-sm leading-loose md:text-left">
            Travel Booking &copy; {new Date().getFullYear()} All rights
            reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm underline underline-offset-4">
            Terms of Service
          </a>
          <a href="#" className="text-sm underline underline-offset-4">
            Privacy Policy
          </a>
          <a href="#" className="text-sm underline underline-offset-4">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
