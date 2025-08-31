import ControlPanel from "../organisms/ControlPanel";
import FluidIndicators from "../organisms/FluidIndicators";
import Lcd from "../organisms/Lcd";
import SoftkeysSelector from "../organisms/SoftkeysSelector";

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
        <SoftkeysSelector />
      </div>
      <div>
        <ControlPanel />
      </div>
    </div>
  );
};

export default DeviceLayout;
