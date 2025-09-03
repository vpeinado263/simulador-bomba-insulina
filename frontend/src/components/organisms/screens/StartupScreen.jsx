import StartMessage from "@/components/atoms/Indicadores/StartMessage";
import MessageRegion from "@/components/molecules/MessageRegion";
import SoftkeyLabel from "@/components/molecules/SoftkeyLabel";
import StatusRegion from "@/components/molecules/StatusRegion";

const StartupScreen = () => {
  return (
  <div className="w-64 h-60 bg-green-200 flex flex-col justify-between rounded-md">
    <div>
      <StatusRegion />
    </div>
    <StartMessage />
    <div>
      <MessageRegion />
    </div>
    <div>
      <SoftkeyLabel />
    </div>
  </div>
  );
};

export default StartupScreen;
