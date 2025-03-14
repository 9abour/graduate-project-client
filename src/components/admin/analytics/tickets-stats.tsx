import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckIcon, TicketIcon, XIcon } from 'lucide-react';

const ticketsData = {
  totalTickets: 4,
  availableTickets: 1,
  soldOutTickets: 3,
  averagePrice: 135,
  ticketsByCompany: {
    '9abour': {
      count: 1,
      averagePrice: 40,
      totalRevenue: 40,
    },
    'Egyption Travel': {
      count: 3,
      averagePrice: 166.67,
      totalRevenue: 500,
    },
  },
};

export default function TicketsStats() {
  const {
    totalTickets,
    availableTickets,
    soldOutTickets,
    averagePrice,
    ticketsByCompany,
  } = ticketsData;

  const soldOutPercentage = (soldOutTickets / totalTickets) * 100;

  return (
    <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {/* Total Tickets Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Tickets</CardTitle>
          <TicketIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalTickets}</div>
          <p className="text-xs text-muted-foreground">
            Total tickets available
          </p>
        </CardContent>
      </Card>

      {/* Available Tickets Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Available Tickets
          </CardTitle>
          <CheckIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{availableTickets}</div>
          <p className="text-xs text-muted-foreground">
            Tickets still available
          </p>
        </CardContent>
      </Card>

      {/* Sold-Out Tickets Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Sold-Out Tickets
          </CardTitle>
          <XIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{soldOutTickets}</div>
          <p className="text-xs text-muted-foreground">Tickets sold out</p>
        </CardContent>
      </Card>

      {/* Average Price Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Price</CardTitle>
          <TicketIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${averagePrice.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">Average ticket price</p>
        </CardContent>
      </Card>

      {/* Tickets by Company Card */}
      <Card className="md:col-span-2 lg:col-span-4">
        <CardHeader>
          <CardTitle>Tickets by Company</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(ticketsByCompany).map(([company, data], index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{company}</span>
                  <span className="text-sm text-muted-foreground">
                    {data.count} tickets
                  </span>
                </div>
                <Progress
                  value={(data.count / totalTickets) * 100}
                  className="h-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Avg. Price: ${data.averagePrice.toFixed(2)}</span>
                  <span>Revenue: ${data.totalRevenue}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sold-Out Progress Card */}
      <Card className="md:col-span-2 lg:col-span-4">
        <CardHeader>
          <CardTitle>Sold-Out Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Sold-Out Tickets</span>
              <span className="text-sm text-muted-foreground">
                {soldOutPercentage.toFixed(2)}%
              </span>
            </div>
            <Progress value={soldOutPercentage} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
