const SearchButton = ({
  onClick,
  isLoading,
}: {
  onClick: () => void;
  isLoading: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-[48px] flex items-center justify-center mt-auto border-2 font-semibold border-black/20 rounded-md hover:bg-gradient-to-r hover:text-black transition background-gradient"
    >
      {isLoading ? 'Loading...' : 'Search'}
    </button>
  );
};

export default SearchButton;
