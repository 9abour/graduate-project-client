interface LocationInputProps {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LocationInput = ({
  label,
  placeholder,
  icon,
  value,
  onChange,
}: LocationInputProps) => {
  return (
    <div className="w-full">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <div className="flex border-2 border-black/20 rounded-md mt-1">
        <div className="w-[45px] h-[45px] flex items-center justify-center border-r-2 py-2 border-black/20">
          {icon}
        </div>
        <input
          type="text"
          id={label.toLowerCase()}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent outline-none p-2"
        />
      </div>
    </div>
  );
};

export default LocationInput;
