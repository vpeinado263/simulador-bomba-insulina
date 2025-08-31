const ButtonNumeric = ({label, onClick}) => {
  return (
  <button 
  onClick={onClick}  
  className="bg-gray-200 hover:bg-gray-300 text-blue-950 font-bold 
  rounded-full px-5 py-3 flex items-center justify-center">
    {label}
  </button>

  );
};

export default ButtonNumeric;
