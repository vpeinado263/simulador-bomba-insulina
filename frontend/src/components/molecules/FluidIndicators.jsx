import FluidDrop from "../atoms/Indicadores/FluidDrop";


const FluidIndicators = () => {
  return (
  <div>
    <div className="flex space-x-67">
      <FluidDrop active={true} />
      <FluidDrop active={true} />
    </div>
  </div>
  );
};

export default FluidIndicators;
