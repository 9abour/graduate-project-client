import React from 'react';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r to-orange-700 from-red-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Travel Booking</h3>
            <p className="text-gray-300 mb-4">
              Discover the world with ease. Book your next adventure with our
              reliable and affordable travel service.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/9abour"
                className="hover:text-red-400 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://x.com/9abour"
                className="hover:text-red-400 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/_9abour"
                className="hover:text-red-400 transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/search"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Search Tickets
                </Link>
              </li>
              <li>
                <Link
                  href="/bookings"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-red-400" />
                <span className="text-gray-300">+201028927382</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-red-400" />
                <span className="text-gray-300">9abour@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-red-400" />
                <span className="text-gray-300">
                  New Cairo
                  <br />
                  Egypt, Cairo
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive special offers and travel updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-white !text-black rounded-md border border-navbar-shadow focus:outline-none placeholder:text-black"
              />
              <button
                type="submit"
                className="px-4 py-2 background-gradient navbar-shadow text-white rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-700 to-red-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} Travel Booking. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-white">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
