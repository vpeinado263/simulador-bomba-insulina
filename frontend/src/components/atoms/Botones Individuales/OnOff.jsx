import { useDevice } from "@/contexts/DeviceContext";

const OnOff = () => {
  const { togglePower } = useDevice();

  return (
    <button
      onClick={togglePower}
      className="bg-yellow-400  hover:bg-yellow-600 text-blue-950 rounded-full font-bold w-18 h-8 text-sm"
    >
      ON/OFF
    </button>
  );
};

export default OnOff;
