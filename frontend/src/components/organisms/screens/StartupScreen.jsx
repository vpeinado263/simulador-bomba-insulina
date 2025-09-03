import { useDevice } from "@/contexts/DeviceContext";
import StartMessage from "@/components/atoms/Indicadores/StartMessage";
import MessageRegion from "@/components/molecules/MessageRegion";
import SoftkeyLabel from "@/components/molecules/SoftkeyLabel";
import StatusRegion from "@/components/molecules/StatusRegion";

const StartupScreen = () => {
  const { step } = useDevice();

  return (
    <div className="w-64 h-60 bg-green-200 flex flex-col justify-between rounded-md">
      <div>
        <StatusRegion text="HOSPIRA Plum A+"/>
      </div>
      <StartMessage />
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
