import { Providers } from './providers';
import './globals.css';
import { MainNav } from '@/components/layout/main-nav';
import { Toaster } from '@/components/ui/sonner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full sm:min-h-screen bg-background font-sans antialiased">
        <Providers>
          <MainNav />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
