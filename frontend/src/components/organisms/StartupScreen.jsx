import { useDevice } from "@/contexts/DeviceContext";
import MessageRegion from "../molecules/MessageRegion";
import SoftkeyLabel from "../molecules/SoftkeyLabel";
import StatusRegion from "../molecules/StatusRegion";

const StartupScreen = () => {
  const { step } = useDevice();

  return (
    <div className="w-64 h-60 bg-green-200 flex flex-col justify-between rounded-md">
      <div>
        <StatusRegion variant="hospira"/>
      </div>
      <WorkingRegion variant="loading"/>
      <div>
        <MessageRegion showBattery={step !== 0}/>
      </div>
      <div>
        <SoftkeyLabel />
      </div>
    </div>
  );
};

export default StartupScreen;
