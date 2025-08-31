import FluidDrop from "../molecules/FluidDrop";

const FluidIndicators = () => {
  return (
  <div>
    <div className="flex space-x-50">
      <FluidDrop active={true} />
      <FluidDrop active={true} />
    </div>
  </div>
  );
};

export default FluidIndicators;
