'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { RocketIcon, CalendarIcon } from '@radix-ui/react-icons';
import { TrendingUpIcon } from 'lucide-react';

const stats = {
  totalBookings: 5,
  totalRevenue: 4600,
  bookingsByDay: {
    '2025-03-05': {
      count: 2,
      revenue: 4000,
    },
    '2025-03-14': {
      count: 3,
      revenue: 600,
    },
  },
  popularRoutes: [
    {
      route: 'Egypt to USA',
      bookings: 5,
      revenue: 4600,
    },
  ],
};

export default function BookingStats() {
  const chartData = Object.entries(stats.bookingsByDay).map(([date, data]) => ({
    date,
    count: data.count,
    revenue: data.revenue,
  }));

  return (
    <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
      {/* Total Bookings Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalBookings}</div>
          <p className="text-xs text-muted-foreground">All-time bookings</p>
        </CardContent>
      </Card>

      {/* Total Revenue Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${stats.totalRevenue}</div>
          <p className="text-xs text-muted-foreground">All-time revenue</p>
        </CardContent>
      </Card>

      {/* Popular Routes Card */}
      <Card className="md:col-span-2 lg:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Popular Routes</CardTitle>
          <RocketIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {stats.popularRoutes.map((route, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-sm">{route.route}</span>
                <span className="text-sm font-medium">${route.revenue}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bookings by Day Chart */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Bookings by Day</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
