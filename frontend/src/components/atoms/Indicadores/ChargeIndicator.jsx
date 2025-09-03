const ChargeIndicator = ({ active }) => {
  return (
    <div className="relative w-[70px] h-[30px] flex items-center justify-center">
      <img
        src="/enchufe.svg"
        alt="Charge Indicator"
        width={60}
        height={60}
      />
      <div
        className={`absolute w-3 h-3 rounded-full transition-all duration-500 ease-in-out
          ${active 
            ? "bg-yellow-300 shadow-[0_0_8px_2px_rgba(250,204,21,0.6)]" 
            : "bg-yellow-500 shadow-none"                               
          }`}
      />
    </div>
  );
};

export default ChargeIndicator;


