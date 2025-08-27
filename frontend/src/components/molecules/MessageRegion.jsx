import BatteryCapacitySymbol from "../atoms/Indicadores/BatteryCapacitySymbol";

const MessageRegion = () => {
  return (
  <div className="w-full h-8 bg-blue-950">
    <div className="flex items-center justify-end">
     <BatteryCapacitySymbol />
    </div>
  </div>
  );
};

export default MessageRegion;
