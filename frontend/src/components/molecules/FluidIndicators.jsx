import FluidDrop from "../atoms/Indicadores/FluidDrop";


const FluidIndicators = () => {
  return (
  <div>
    <div className="flex space-x-110">
      <FluidDrop active={true} />
      <FluidDrop active={true} />
    </div>
  </div>
  );
};

export default FluidIndicators;
