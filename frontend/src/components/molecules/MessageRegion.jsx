import BatteryCapacitySymbol from "../atoms/Indicadores/BatteryCapacitySymbol";

const MessageRegion = ({ showBattery = true }) => {
  return (
    <div className="h-7 bg-black">
      {showBattery && <BatteryCapacitySymbol />}
    </div>
  );
};

export default MessageRegion;
