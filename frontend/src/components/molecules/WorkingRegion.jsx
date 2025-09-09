import InsertStep from "../atoms/WorkingRegion/InsertStep";
import Loadingstep from "../atoms/WorkingRegion/LoadingStep";
import CloseStep from "../atoms/WorkingRegion/CloseStep";
import InfusingStep from "../atoms/WorkingRegion/InfusingStep";
import { useDevice } from "@/contexts/DeviceContext";

const WorkingRegion = () => {
  const { step, inserted, closed, loading } = useDevice();

  if (loading) return <Loadingstep />;
  if (step === 1 || step === 2) {
    if (!inserted) return <InsertStep />;
    if (inserted && !closed) return <CloseStep />;
    if (inserted && closed) return <InfusingStep />;
  }

  return null;
};

export default WorkingRegion;