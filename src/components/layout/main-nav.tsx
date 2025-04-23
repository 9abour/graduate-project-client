'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/auth-store';
import { useLogout } from '@/hooks/use-auth';
import { cn } from '@/lib/cn';
import { ArrowUp, MenuIcon, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function MainNav() {
  const pathname = usePathname();
  const { isAuthenticated, isAdmin, isCompany, user } = useAuthStore();
  const logout = useLogout();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const isHome = pathname === '/';
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  const routes = React.useMemo(() => {
    const commonRoutes = [
      {
        href: '/',
        label: 'Home',
        active: pathname === '/',
      },
      {
        href: '/search',
        label: 'Search Tickets',
        active: pathname === '/search',
      },
    ];

    if (isAdmin) {
      return [
        ...commonRoutes,
        {
          href: '/admin/tickets',
          label: 'Manage Tickets',
          active: pathname === '/admin/tickets',
        },
        {
          href: '/admin/bookings',
          label: 'Manage Bookings',
          active: pathname === '/admin/bookings',
        },
        {
          href: '/admin/users',
          label: 'Manage Users',
          active: pathname === '/admin/users',
        },
      ];
    }

    if (isCompany) {
      return [
        ...commonRoutes,
        {
          href: '/company/my-tickets',
          label: 'My Tickets',
          active: pathname === '/company/my-tickets',
        },
        {
          href: '/company/my-bookings',
          label: 'My Bookings',
          active: pathname === '/company/my-bookings',
        },
      ];
    }

    if (isAuthenticated) {
      return [
        ...commonRoutes,
        {
          href: '/my-bookings',
          label: 'My Bookings',
          active: pathname === '/my-bookings',
        },
      ];
    } else {
      return [
        ...commonRoutes,
        {
          href: '/auth/login',
          label: 'Login',
          active: pathname === '/auth/login',
        },
      ];
    }
  }, [pathname, isAuthenticated, isAdmin]);

  return (
    <>
      <nav
        className={cn(
          'fixed container top-4 left-2/4 -translate-x-2/4 w-[calc(100%-2rem)] h-[60px] px-2 z-[999]'
        )}
      >
        <div
          className={cn(
            'relative w-full h-full flex-ai-c flex-jc-sb space-x-4 rounded-full border border-transparent navbar-shadow transition',
            isHome && isScrolled
              ? 'bg-black/60 backdrop-blur-3xl border-black/10'
              : !isHome && !isScrolled
              ? 'bg-white/90'
              : !isHome && isScrolled
              ? 'bg-white/60 backdrop-blur-3xl border-black/10'
              : 'bg-black/90'
          )}
        >
          <Link href="/" className="flex items-center mx-6">
            <span className="inline-block font-bold text-gradient">
              Travel Booking
            </span>
          </Link>

          <div className="gap-4 hidden sm:flex items-center">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'text-md font-medium px-4 h-[40px] rounded-full border border-transparent flex justify-center items-center hover:border-[#363636]/50 transition',
                  route.active ? 'text-gradient' : '',
                  isHome && !route.active
                    ? 'text-white'
                    : !route.active && 'text-black'
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex">
            {!isAuthenticated && (
              <div className="relative group">
                <Link
                  href="/auth/register"
                  className="text-md font-medium px-4 h-[40px] bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-3xl border border-transparent flex justify-center items-center hover:shadow transition pr-[50px]"
                >
                  Sign up
                </Link>

                <span className="absolute right-0 w-[40px] h-[40px] rounded-full bg-white text-[#363636] flex justify-center items-center border border-[#363636] top-0 group-hover:right-[-5px] transition cursor-pointer">
                  <ArrowUp className="rotate-45" />
                </span>
              </div>
            )}

            {isAuthenticated && (
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Logout
              </Button>
            )}
          </div>

          <button className="relative w-[30px] h-[30px] mx-4 flex-ai-c flex-jc-c sm:!hidden text-white">
            <MenuIcon
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'transition absolute left-0',
                !isOpen ? 'opacity-100' : 'opacity-0',
                isHome ? 'text-white' : 'text-black'
              )}
              size={25}
            />
            <X
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'transition absolute left-0',
                isOpen ? 'opacity-100' : 'opacity-0',
                isHome ? 'text-white' : 'text-black'
              )}
              size={25}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className={cn(
              'fixed w-[calc(100%-2rem)] flex sm:hidden flex-col gap-[24px] top-[81px] bg-white/90 !backdrop-blur-2xl left-2/4 -translate-x-2/4 rounded-[14px] py-[24px] px-[32px] border border-transparent navbar-shadow z-50',
              isHome && isScrolled
                ? 'bg-black/60 backdrop-blur-3xl border-black/10'
                : !isHome && !isScrolled
                ? 'bg-white/90'
                : !isHome && isScrolled
                ? 'bg-white/60 backdrop-blur-3xl border-black/10'
                : 'bg-black/90'
            )}
          >
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'text-md font-medium px-4 h-[40px] rounded-full border border-transparent flex justify-center items-center hover:border-[#363636]/50 transition',
                  route.active ? 'text-gradient' : '',
                  isHome && !route.active ? 'text-white' : !route.active && ''
                )}
              >
                {route.label}
              </Link>
            ))}

            <div className="w-full flex sm:hidden">
              {!isAuthenticated && (
                <div className="relative group w-full">
                  <Link
                    href="/auth/register"
                    className="w-full text-md font-medium px-4 h-[40px] bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-3xl border border-transparent flex justify-center items-center hover:shadow transition pr-[50px]"
                  >
                    Sign up
                  </Link>

                  <span className="absolute right-0 w-[40px] h-[40px] rounded-full bg-white text-[#363636] flex justify-center items-center border border-[#363636] top-0 group-hover:right-[-5px] transition cursor-pointer">
                    <ArrowUp className="rotate-45" />
                  </span>
                </div>
              )}

              {isAuthenticated && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className={cn(
                    'w-full text-md font-medium px-4 h-[40px] rounded-full border flex justify-center items-center border-[#363636]/50 bg-white text-[#363636] hover:border-[#363636] transition'
                  )}
                >
                  Logout
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
