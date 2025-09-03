const Select = () => {
  return (
    <div className="flex flex-col justify-between bg-white  hover:bg-gray-300 rounded-full text-blue-950 font-bold h-40 w-12">
      <button>▲</button>
      <span className="flex items-center w-16 h-5 text-sm">SELECT</span>
      <button>▼</button>
    </div>
  );
};

export default Select;
