import { useDevice } from "@/contexts/DeviceContext";
import ScreenLayout from "../atoms/Layout/ScreenLayout";
import MessageRegion from "../molecules/MessageRegion";
import SoftkeyLabel from "../molecules/SoftkeyLabel";
import StatusRegion from "../molecules/StatusRegion";
import WorkingRegion from "../molecules/WorkingRegion";
import StartupScreen from "../organisms/StartupScreen";

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
          <WorkingRegion variant="infusing"/>
          <MessageRegion />
          <SoftkeyLabel />
        </ScreenLayout>
      );

    default:
      return null;
  }
};

export default Lcd;
