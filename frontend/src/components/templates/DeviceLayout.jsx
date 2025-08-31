import ControlPanel from "../organisms/ControlPanel";
import FluidIndicators from "../organisms/FluidIndicators";
import Lcd from "../organisms/Lcd";
import SoftkeysSelector from "../organisms/SoftkeysSelector";

const DeviceLayout = () => {
  return (
    <div className="w-[500px] h-[700px] bg-[rgb(122,77,115)] rounded-2xl shadow-lg flex flex-col justify-between items-center">
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

