import InsertStep from "../atoms/WorkingRegion/InsertStep";
import LoadingStep from "../atoms/WorkingRegion/LoadingStep";
import CloseStep from "../atoms/WorkingRegion/CloseStep";
import InfusingStep from "../atoms/WorkingRegion/InfusingStep";
import { useDevice } from "@/contexts/DeviceContext";

const WorkingRegion = ({ variant }) => {
  const { step, inserted, closed, loading } = useDevice();
  const variants = {
    loading: <LoadingStep />,
    insert: <InsertStep />,
    close: <CloseStep />,
    infusing: <InfusingStep />,
  };

  if (variant) return variants[variant] || null;

  let defaultVariant;
  if (loading) defaultVariant = "loading";
  else if ((step === 1 || step === 2) && !inserted) defaultVariant = "insert";
  else if ((step === 1 || step === 2) && inserted && !closed) defaultVariant = "close";
  else if ((step === 1 || step === 2) && inserted && closed) defaultVariant = "infusing";

  return defaultVariant ? variants[defaultVariant] : null;
};

export default WorkingRegion;
