const ButtonNumeric = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white hover:bg-gray-300 text-blue-950 font-bold 
  rounded-full  py-2 flex items-center justify-center text-sm"
    >
      {label}
    </button>
  );
};

export default ButtonNumeric;
