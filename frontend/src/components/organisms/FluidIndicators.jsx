import FluidDrop from "../molecules/FluidDrop";

const FluidIndicators = () => {
  return (
    <div className="flex space-x-55">
      <FluidDrop active={true} />
      <FluidDrop active={true} />
    </div>
  );
};

export default FluidIndicators;
