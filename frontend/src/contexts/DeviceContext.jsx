import { createContext, useContext, useState } from "react";

const DeviceContext = createContext ();

export const useDevice = () => useContext(DeviceContext);

export const DeviceProvider = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const [loading, setLoading] = useState(false);

const togglePower = () => {
  if (!isOn) {
    setLoading(true);
    setTimeout(() => {
      setIsOn(true);
      setLoading(false);
    }, 3000);
  } else {
    setIsOn(false);
    setLoading(false);
  }
};

return (
    <DeviceContext.Provider value={{ isOn, loading, togglePower }}>
      {children} 
    </DeviceContext.Provider>
  );
};
