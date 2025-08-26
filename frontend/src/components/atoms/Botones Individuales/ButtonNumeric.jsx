

const ButtonNumeric = ({label, onClick}) => {
  return (
    <button
    onClick={onClick}
    className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full text-blue-950 font-bold text-1xl py-5 w-full"
  >
    {label}
  </button>
  );
};

export default ButtonNumeric;
