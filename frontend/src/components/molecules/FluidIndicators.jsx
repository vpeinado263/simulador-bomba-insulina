import FluidDrop from "../atoms/Indicadores/FluidDrop";


const FluidIndicators = () => {
  return (
  <div className="flex flex-col items-center">
    <div className="flex justify-center space-x-4">
      <FluidDrop active={true} />
      <FluidDrop active={true} />
    </div>
  </div>
  );
};

export default FluidIndicators;
