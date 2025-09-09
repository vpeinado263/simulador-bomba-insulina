const { default: InfusingStep } = require("../atoms/WorkingRegion/InfusingStep");
const { default: InsertStep } = require("../atoms/WorkingRegion/InsertStep");
const { default: Loadingstep } = require("../atoms/WorkingRegion/LoadingStep");

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
