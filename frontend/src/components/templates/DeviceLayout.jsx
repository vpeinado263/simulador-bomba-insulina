import ControlSet from "../molecules/ControlSet";
import ControlPanel from "../organisms/ControlPanel";
import FluidIndicators from "../organisms/FluidIndicators";
import Lcd from "../organisms/Lcd";
import SoftkeysSelector from "../organisms/SoftkeysSelector";

const DeviceLayout = () => {
  return (
    <>
    <div className="w-[370px] h-[600px] bg-[rgb(122,77,115)] rounded-2xl flex flex-col justify-between items-center">
      <div>
        <FluidIndicators />
      </div>
      <div>
        <Lcd />
        <SoftkeysSelector />
      </div>
      <div>
        <ControlPanel />
      </div>
    </div>
    <ControlSet />
    </>
    
  );
};

export default DeviceLayout;
