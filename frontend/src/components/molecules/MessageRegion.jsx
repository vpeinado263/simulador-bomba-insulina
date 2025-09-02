import BatteryCapacitySymbol from "../atoms/Indicadores/BatteryCapacitySymbol";

const MessageRegion = () => {
  return (
  <div className="w-full h-6 bg-black">
    <div className="flex items-center justify-end">
     <BatteryCapacitySymbol />
    </div>
  </div>
  );
};

export default MessageRegion;
