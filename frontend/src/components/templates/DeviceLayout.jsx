import StatusRegion from "../organisms/StatusRegion";


const DeviceLayout = () => {
  return (
    <div className="w-[400px] h-[600px] bg-gray-200 rounded-2xl shadow-lg flex flex-col items-center p-4">
        <StatusRegion />
    <div className="flex-1 w-full flex items-center justify-center my-2">   
    </div>
  </div>
  );
};

export default DeviceLayout;
