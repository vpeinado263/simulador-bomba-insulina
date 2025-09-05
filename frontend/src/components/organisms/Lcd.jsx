import { useDevice } from "@/contexts/DeviceContext";
import ScreenLayout from "../atoms/Layout/ScreenLayout";
import StatusAB from "../atoms/StatusRegion/StatusAB";
import StatusSetup from "../atoms/StatusRegion/StatusSetup";
import MessageRegion from "../molecules/MessageRegion";
import SoftkeyLabel from "../molecules/SoftkeyLabel";
import WorkingRegion from "../molecules/WorkingRegion";
import StartupScreen from "./screens/StartupScreen";

const Lcd = () => {
  const { step, isOn, loading, inserted, closed } = useDevice();

  switch (step) {
    case 0:
    if (!isOn && !loading) return <div className="bg-black w-64 h-60 rounded-md" />;
    if (loading) return <StartupScreen />;
    case 1:
      return (
        <ScreenLayout>
          <StatusSetup />
          <WorkingRegion text1="Insert PLUM Set" text2="Close Lever" />
          <MessageRegion />
          <SoftkeyLabel />
        </ScreenLayout>
      );
      case 2: {
        const workingText1 = inserted && closed ? "Mechanism Initialization" : "Insert PLUM Set";
        const workingText2 = inserted && closed ? "In Progress..." : "Close Lever";
      
        return (
          <ScreenLayout>
            <StatusSetup />
            <WorkingRegion text1={workingText1} text2={workingText2} />
            <MessageRegion />
            <SoftkeyLabel />
          </ScreenLayout>
        );
      }
      
    case 5:
      return (
        <ScreenLayout>
          <StatusAB />
          <WorkingRegion text1="0 ml/hr" text2="0 Vol inf. ml" />
          <MessageRegion />
          <SoftkeyLabel text1="Black Prime" text2="A" text3="B" text4="Options/Vol Inf" />
        </ScreenLayout>
      );

    default:
      return null;
  }
};

export default Lcd;

