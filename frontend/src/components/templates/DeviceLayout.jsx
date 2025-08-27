import Softkeys from "../atoms/Botones Individuales/Softkeys";
import Lcd from "../organisms/Lcd";

const DeviceLayout = () => {
  return (
    <div className="w-[600px] h-[800px] bg-blue-950 rounded-2xl shadow-lg flex flex-col items-center p-4">
      <Lcd />
      <div>
       <Softkeys />
      </div> 
    <div className="flex-1 w-full flex items-center justify-center my-2">  

    </div>
  </div>
  );
};

export default DeviceLayout;
