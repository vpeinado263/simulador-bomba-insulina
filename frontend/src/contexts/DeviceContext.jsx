import { createContext, useContext, useState} from "react";

const DeviceContext = createContext();

export const useDevice = () => useContext(DeviceContext);

export const DeviceProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  const togglePower = () => {
    if (step === 0) {
      setStep(1);
      setTimeout(() => {
        setStep(2);
      }, 3000);
    } else {
      setStep(0);
    }
  };

  return (
    <DeviceContext.Provider value={{ step, setStep, togglePower }}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContext;
