import FluidDrop from "../atoms/FluidDrop";

const FluidIndicators = () => {
  return (
    <div className="flex gap-4">
    <FluidDrop active={true} />
    <FluidDrop active={false} />
  </div>
  );
};

export default FluidIndicators;
