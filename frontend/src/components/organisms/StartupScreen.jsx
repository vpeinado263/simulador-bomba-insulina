import { useDevice } from "@/contexts/DeviceContext";
import MessageRegion from "@/components/molecules/MessageRegion";
import SoftkeyLabel from "@/components/molecules/SoftkeyLabel";
import StatusRegion from "@/components/molecules/StatusRegion";
import WorkingRegion from "@/components/molecules/WorkingRegion";

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
