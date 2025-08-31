import Softkeys from "../atoms/Botones Individuales/Softkeys";
import ControlPanel from "../organisms/ControlPanel";
import FluidIndicators from "../organisms/FluidIndicators";
import Lcd from "../organisms/Lcd";

const DeviceLayout = () => {
  return (
    <div className="w-[800px] h-[800px] bg-blue-950 rounded-2xl shadow-lg flex flex-col justify-between items-center p-8">
      <div>
        <FluidIndicators />
      </div>
      <div>
        <Lcd />
      </div>
      <div>
        <Softkeys />
      </div>
      <div>
        <ControlPanel />
      </div>
    </div>
  );
};

export default DeviceLayout;
