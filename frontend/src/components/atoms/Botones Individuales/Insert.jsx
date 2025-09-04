import { useDevice } from "@/contexts/DeviceContext";

const Insert = () => {
  const { setInserted } = useDevice
  return (
    <button 
    onClick={() => setInserted(true)}
    className="w-40 h-12 
    bg-green-600 
    text-white 
    font-bold 
    rounded-md 
    border-2 
    border-gray-800 
    shadow-md 
    hover:bg-green-700 
    active:scale-95 
    active:shadow-inner 
    transition"
    >
      Insertar PLUM set
    </button>
  );
};

export default Insert;
