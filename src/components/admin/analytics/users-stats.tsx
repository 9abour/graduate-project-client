import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  BuildingIcon,
  CalendarIcon,
  ShieldIcon,
  TicketIcon,
  UserIcon,
  UsersIcon,
} from 'lucide-react';

const usersData = {
  totalUsers: 4,
  travelers: 2,
  admins: 1,
  companies: 1,
  newUsersLast30Days: 4,
  averageBookingsPerUser: 1.67,
};

export default function UsersStats() {
  const {
    totalUsers,
    travelers,
    admins,
    companies,
    newUsersLast30Days,
    averageBookingsPerUser,
  } = usersData;

  const travelersPercentage = (travelers / totalUsers) * 100;
  const adminsPercentage = (admins / totalUsers) * 100;
  const companiesPercentage = (companies / totalUsers) * 100;

  return (
    <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
      {/* Total Users Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <UsersIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalUsers}</div>
          <p className="text-xs text-muted-foreground">All registered users</p>
        </CardContent>
      </Card>

      {/* Travelers Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Travelers</CardTitle>
          <UserIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{travelers}</div>
          <p className="text-xs text-muted-foreground">Travelers registered</p>
        </CardContent>
      </Card>

      {/* Admins Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Admins</CardTitle>
          <ShieldIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{admins}</div>
          <p className="text-xs text-muted-foreground">Admin accounts</p>
        </CardContent>
      </Card>

      {/* Companies Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Companies</CardTitle>
          <BuildingIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{companies}</div>
          <p className="text-xs text-muted-foreground">Registered companies</p>
        </CardContent>
      </Card>

      {/* New Users Last 30 Days Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            New Users (30 Days)
          </CardTitle>
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{newUsersLast30Days}</div>
          <p className="text-xs text-muted-foreground">
            New users in the last 30 days
          </p>
        </CardContent>
      </Card>

      {/* Average Bookings Per User Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Avg. Bookings Per User
          </CardTitle>
          <TicketIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {averageBookingsPerUser.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            Average bookings per user
          </p>
        </CardContent>
      </Card>

      {/* User Distribution Card */}
      <Card className="md:col-span-2 lg:col-span-3">
        <CardHeader>
          <CardTitle>User Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Travelers</span>
                <span className="text-sm text-muted-foreground">
                  {travelersPercentage.toFixed(2)}%
                </span>
              </div>
              <Progress value={travelersPercentage} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Admins</span>
                <span className="text-sm text-muted-foreground">
                  {adminsPercentage.toFixed(2)}%
                </span>
              </div>
              <Progress value={adminsPercentage} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Companies</span>
                <span className="text-sm text-muted-foreground">
                  {companiesPercentage.toFixed(2)}%
                </span>
              </div>
              <Progress value={companiesPercentage} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
