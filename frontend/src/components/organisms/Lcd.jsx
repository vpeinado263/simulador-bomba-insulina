import { useDevice } from "@/contexts/DeviceContext";
import ScreenLayout from "../atoms/Layout/ScreenLayout";
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
      <ScreenLayout>
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
      </ScreenLayout>
    );
    //Estado encendido 
    case 2:
    if (isOn && !loading) {
      return (
        <ScreenLayout>
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
        </ScreenLayout>
      );
    }
  }
  return null;
};

export default Lcd;
