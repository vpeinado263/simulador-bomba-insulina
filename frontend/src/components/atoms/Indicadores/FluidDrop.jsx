import { Droplet } from "lucide-react";

const FluidDrop = ({ line, active }) => {
  return (
    <div>
    <Droplet
      className={`w-6 h-6 ${
        active ? "text-white animate-pulse" : "text-yellow-300"
      }`}
    />
    <span className="text-sm font-medium">{line}</span>
  </div>
  );
};

export default FluidDrop;
