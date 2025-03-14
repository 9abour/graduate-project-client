interface PriceInputProps {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceInput = ({
  label,
  placeholder,
  icon,
  id,
  value,
  onChange,
}: PriceInputProps) => {
  return (
    <div className="w-full min-w-[100px]">
      <label htmlFor={id}>{label}</label>
      <div className="flex border-2 border-black/20 rounded-md mt-1">
        <div className="w-[45px] h-[45px] flex items-center justify-center border-r-2 py-2 border-black/20">
          {icon}
        </div>
        <input
          type="number"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full text-center bg-transparent outline-none p-2"
        />
      </div>
    </div>
  );
};

export default PriceInput;
