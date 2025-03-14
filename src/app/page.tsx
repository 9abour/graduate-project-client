import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';

export default function Home() {
  return (
    <main className="flex h-full sm:min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />
    </main>
  );
}
