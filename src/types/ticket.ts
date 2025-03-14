export interface Ticket {
  _id: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  availableSeats: number;
  travelCompany: string;
  createdAt: string;
  updatedAt: string;
}

export interface TicketFilters {
  from?: string;
  to?: string;
  minPrice?: number;
  maxPrice?: number;
  departureDate?: string;
  travelCompany?: string;
}

export interface CreateTicketData {
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  availableSeats: number;
  travelCompany: string;
}

export interface UpdateTicketData extends Partial<CreateTicketData> {
  id: string;
}
