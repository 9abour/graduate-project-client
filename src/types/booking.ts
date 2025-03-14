import { Ticket } from './ticket';
import { User } from './auth';

export interface Booking {
  _id: string;
  ticket: Ticket;
  user: User;
  bookingDate: string;
  numberOfSeats: number;
  status: 'Confirmed' | 'Cancelled' | 'Pending';
  createdAt: string;
  updatedAt: string;
}

export interface CreateBookingData {
  ticketId: string;
  numberOfSeats: number;
}

export interface BookingFilters {
  status?: string;
  fromDate?: string;
  toDate?: string;
}
