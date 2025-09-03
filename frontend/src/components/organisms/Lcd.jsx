import { useDevice } from "@/contexts/DeviceContext";
import MessageRegion from "../molecules/MessageRegion";
import SoftkeyLabel from "../molecules/SoftkeyLabel";
import StatusRegion from "../molecules/StatusRegion";
import WorkingRegion from "../molecules/WorkingRegion";
import StartupScreen from "./screens/StartupScreen";

const Lcd = () => {
  const { isOn, loading } = useDevice();
  if (!isOn && !loading) {
    return <div className="bg-black w-64 h-60 rounded-md" />;
  }

  if (loading) {
    return (
    <StartupScreen />
    );
  }

  //Estado encendido 
  if (isOn && !loading) {
    return (
      <div className="w-64 h-60 bg-green-200 flex flex-col justify-between rounded-md">
        <div>
          <StatusRegion />
        </div>
        <div>
          <WorkingRegion />
        </div>
        <div>
          <MessageRegion />
        </div>
        <div>
          <SoftkeyLabel />
        </div>
      </div>
    );
  }

  return null;
};

export default Lcd;
