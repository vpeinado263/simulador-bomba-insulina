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
    return !isOn && !loading
    ? <div className="bg-black w-64 h-60 rounded-md" />
    : <StartupScreen />;

    case 1:
    case 2:
    return (
    <ScreenLayout>
      <StatusRegion variant="setup" />
      <WorkingRegion />
      <MessageRegion />
      <SoftkeyLabel />
    </ScreenLayout>
    );
    case 5: 
      return (
        <ScreenLayout>
          <StatusRegion variant="ab" />
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
