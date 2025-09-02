import MessageRegion from "../molecules/MessageRegion"
import SoftkeyLabel from "../molecules/SoftkeyLabel"
import StatusRegion from "../molecules/StatusRegion"

const Lcd = () => {
  return (
    <div className="w-full h-70 bg-green-200 flex flex-col justify-between">
      <div>
        <StatusRegion />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <span>Release X.XX</span>
          <span> Copyright Abbott Laboratories 2002</span>
        </div>
        <div className="flex flex-col items-center">
          <span>System Self Test</span>
          <span>In Progress</span>
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
