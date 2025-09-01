import LineFlowIndicator from "../atoms/Indicadores/LineFlowIndicator";

const FluidDrop = ({ line, active }) => {
  return (
    <div className="relative flex flex-col items-center">
      <LineFlowIndicator />
      <div
        className={`absolute top-8 w-2 h-2 rounded-full ${
          active ? "bg-yellow-300 animate-pulse border-white" : "bg-green-300-300 border-gray-300"
        }`}
      ></div>
      <span>{line}</span>
    </div>
  );
};

export default FluidDrop;

