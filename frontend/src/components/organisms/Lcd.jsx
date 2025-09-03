import { useDevice } from "@/contexts/DeviceContext";
import MessageRegion from "../molecules/MessageRegion";
import SoftkeyLabel from "../molecules/SoftkeyLabel";
import StatusRegion from "../molecules/StatusRegion";
import WorkingRegion from "../molecules/WorkingRegion";
import StartupScreen from "./screens/StartupScreen";

const Lcd = () => {
  const { step, isOn, loading } = useDevice();

  switch (step) {
    case 0:
    if (!isOn && !loading) {
      return <div className="bg-black w-64 h-60 rounded-md" />;
    }
  
    if (loading) {
      return (
        <div>
           <StartupScreen />
        </div>
      );
    }

    case 1: 
    return (
      <div className="w-64 h-60 bg-green-200 flex flex-col justify-between rounded-md">
        <div>
          <StatusRegion text="SETUP" />
        </div>
        <div>
          <WorkingRegion text1="Insert PLUM Set" text2="Close Lever" />
        </div>
        <div>
          <MessageRegion />
        </div>
        <div>
          <SoftkeyLabel />
        </div>
      </div>
    );
    //Estado encendido 
    case 2:
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
  }
 
};

export default Lcd;
