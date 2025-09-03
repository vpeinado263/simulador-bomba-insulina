import ControlSet from "../molecules/ControlSet";
import ControlPanel from "../organisms/ControlPanel";
import FluidIndicators from "../organisms/FluidIndicators";
import Lcd from "../organisms/Lcd";
import SoftkeysSelector from "../organisms/SoftkeysSelector";

const DeviceLayout = () => {
  return (
    <div className="flex space-x-6 items-start">
      <div className="flex flex-col justify-start">
        <ControlSet />
      </div>
      <div className="w-[370px] h-[600px] bg-[rgb(122,77,115)] rounded-2xl flex flex-col justify-between items-center p-4">
        <FluidIndicators />
        <div>
          <Lcd />
          <SoftkeysSelector />
        </div>
        <ControlPanel />
      </div>
    </div>
  );
};

export default DeviceLayout;

