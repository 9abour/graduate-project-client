import { cn } from '@/lib/cn';
import { ArrowDownUp } from 'lucide-react';

interface ReverseButtonProps {
  onClick: () => void;
  isMobile?: boolean;
}

const ReverseButton = ({ onClick, isMobile = false }: ReverseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center border-2 border-black/20 rounded-2xl background-gradient transition',
        isMobile
          ? 'absolute top-2/4 -translate-y-2/4 mt-[14px] right-4 w-[55px] h-[55px] md:hidden'
          : 'min-w-[48.56px] w-[48.56px] min-h-[48.56px] h-[48.56px] hidden md:flex mt-auto'
      )}
    >
      <ArrowDownUp />
    </button>
  );
};

export default ReverseButton;
