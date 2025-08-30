import Softkeys from "../atoms/Botones Individuales/Softkeys";
import FluidIndicators from "../molecules/FluidIndicators";
import ControlPanel from "../organisms/ControlPanel";
import Lcd from "../organisms/Lcd";

const DeviceLayout = () => {
  return (
    <div className="w-[600px] h-[800px] bg-blue-950 rounded-2xl shadow-lg flex flex-col justify-between items-center p-6">
      <div>
        <FluidIndicators />
      </div>
      <div className="w-full flex flex-col items-center my-4">
        <Lcd />
        <Softkeys />
      </div>
      <div className="w-full flex-1 flex items-end justify-center mt-4">
        <ControlPanel />
      </div>
    </div>
  );
};

export default DeviceLayout;
