import { useDevice } from "@/contexts/DeviceContext";
import InsertStep from "@/atoms/WorkingRegion/InsertStep";
import CloseStep from "@/atoms/WorkingRegion/CloseStep";
import InfusingStep from "@/atoms/WorkingRegion/InfusingStep";
import LoadingStep from "@/atoms/WorkingRegion/LoadingStep";

const WorkingRegion = () => {
  const { step, inserted, closed, loading } = useDevice();

  if (loading) return <LoadingStep />;
  if (step === 0 && !inserted) return <InsertStep />;
  if (step === 1 && inserted && !closed) return <CloseStep />;
  if (step === 2 && inserted && closed) return <InfusingStep />;

  return null;
};

export default WorkingRegion;
