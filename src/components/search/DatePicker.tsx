import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarDays } from 'lucide-react';
import { format } from 'date-fns';

interface DatePickerProps {
  label: string;
  date: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

const DatePicker = ({ label, date, onSelect }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-full">
          <label htmlFor={label.toLowerCase()}>{label}</label>
          <button className="w-full flex items-center border-2 border-black/20 rounded-md mt-1">
            <div className="w-[45px] h-[45px] flex items-center justify-center border-r-2 py-2 border-black/20">
              <CalendarDays />
            </div>
            <span className="mx-2">
              {date ? format(date, 'PPP') : 'Pick a date'}
            </span>
          </button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
