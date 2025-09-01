import MessageRegion from "../molecules/MessageRegion"
import SoftkeyLabel from "../molecules/SoftkeyLabel"
import StatusRegion from "../molecules/StatusRegion"

const Lcd = () => {
  return (
    <div className="w-full h-80 bg-green-200 flex flex-col justify-between">
      <div>
        <StatusRegion />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center space-y-6">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-extrabold text-black">125</span>
          <span className="text-sm text-gray-800">mL/hr</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-extrabold text-black">450</span>
          <span className="text-sm text-gray-800">mL</span>
        </div>
      </div>
      <div>
        <MessageRegion />
      </div>
      <div>
        <SoftkeyLabel />
      </div>
    </div>
  );
};

export default Lcd;
