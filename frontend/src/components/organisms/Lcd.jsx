import { useDevice } from "@/contexts/DeviceContext";
import ScreenLayout from "../atoms/Layout/ScreenLayout";
import MessageRegion from "../molecules/MessageRegion";
import SoftkeyLabel from "../molecules/SoftkeyLabel";
import StatusRegion from "../molecules/StatusRegion";
import WorkingRegion from "../molecules/WorkingRegion";
import StartupScreen from "./screens/StartupScreen";

const Lcd = () => {
  const { step, isOn, loading, inserted, closed } = useDevice();

  switch (step) {
    case 0:
      if (!isOn && !loading) {
        return <div className="bg-black w-64 h-60 rounded-md" />;
      }
      if (loading) {
        return <StartupScreen />;
      }
    case 1:
      return (
        <ScreenLayout>
          <StatusRegion text="SETUP" />
          <WorkingRegion text1="Insert PLUM Set" text2="Close Lever" />
          <MessageRegion />
          <SoftkeyLabel />
        </ScreenLayout>
      );
    case 2:
      if (!inserted || !closed) {
        return (
          <ScreenLayout>
            <StatusRegion text="SETUP" />
            <WorkingRegion text1="Insert PLUM Set" text2="Close Lever" />
            <MessageRegion />
            <SoftkeyLabel />
          </ScreenLayout>
        );
      } else {
        return (
          <ScreenLayout>
            <StatusRegion text="SETUP" />
            <WorkingRegion text1="Mechanism Initialization" text2="In Progress..." />
            <MessageRegion />
            <SoftkeyLabel />
          </ScreenLayout>
        );
      }
    case 5:
      return (
        <ScreenLayout>
          <StatusRegion text="|A| STOPPED | STOPPED |B|" />
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

