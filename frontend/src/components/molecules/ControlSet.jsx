import Close from "../atoms/Botones Individuales/Close";
import Insert from "../atoms/Botones Individuales/Insert";

const ControlSet = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 p-4 rounded-lg space-y-3 w-48">
      <Insert />
      <Close />
    </div>
  );
};

export default ControlSet;
