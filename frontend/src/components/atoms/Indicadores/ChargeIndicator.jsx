const ChargeIndicator = () => {
  return (
    <div className="relative w-[70px] h-[30px] flex items-center justify-center space-x-2">
      <img src="/enchufe.svg" alt="Charge Indicator" width={60} height={60} />
      <div className="absolute w-3 h-3 rounded-full bg-yellow-600" />
    </div>
  );
};

export default ChargeIndicator;
