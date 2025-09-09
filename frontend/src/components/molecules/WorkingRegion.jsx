import InsertStep from "../atoms/WorkingRegion/InsertStep";
import LoadingStep from "../atoms/WorkingRegion/LoadingStep";
import CloseStep from "../atoms/WorkingRegion/CloseStep";
import InfusingStep from "../atoms/WorkingRegion/InfusingStep";
import { useDevice } from "@/contexts/DeviceContext";

const WorkingRegion = () => {
  const { step, inserted, closed, loading } = useDevice();
  
  let variant;
  if (loading) variant = "loading";
  else if ((step === 1 || step === 2) && !inserted) variant = "insert";
  else if ((step === 1 || step === 2) && inserted && !closed) variant = "close";
  else if ((step === 1 || step === 2) && inserted && closed) variant = "infusing";

  const variants = {
    loading: <LoadingStep />,
    insert: <InsertStep />,
    close: <CloseStep />,
    infusing: <InfusingStep />,
  };

  return variant ? variants[variant] : null;
};

export default WorkingRegion;
