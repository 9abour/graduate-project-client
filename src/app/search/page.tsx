import SearchClient from '@/app/search/SearchClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Flights',
};

const page = () => {
  return <SearchClient />;
};

export default page;
