import { useDevice } from "@/contexts/DeviceContext";
import MessageRegion from "../molecules/MessageRegion";
import SoftkeyLabel from "../molecules/SoftkeyLabel";
import StatusRegion from "../molecules/StatusRegion";

const Lcd = () => {
  const { isOn, loading } = useDevice();
  if (!isOn && !loading) {
    return <div className="bg-black w-64 h-60 rounded-md" />;
  }

  if (loading) {
    return (
      <div className="w-64 h-60 bg-green-200 flex flex-col justify-between rounded-md">
        <div>
          <StatusRegion />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-sm">
          <div className="flex flex-col items-center mb-2">
            <span>Ver: 13.43.00.001 2014/11/20</span>
            <span>Copyright Hospira Inc.</span>
          </div>
          <div className="flex flex-col items-center font-bold">
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
  }

  //Estado encendido 
  if (isOn && !loading) {
    return (
      <div className="w-64 h-60 bg-green-200 flex flex-col justify-between rounded-md">
        <div>
          <StatusRegion />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <span className="font-bold">Device Ready</span>
        </div>
        <div>
          <MessageRegion />
        </div>
        <div>
          <SoftkeyLabel />
        </div>
      </div>
    );
  }

  return null;
};

export default Lcd;
