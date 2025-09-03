import { createContext, useContext, useState } from "react";

const DeviceContext = createContext();

export const useDevice = () => useContext(DeviceContext);

export const DeviceProvider = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

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
      setStep(0); // reiniciamos step al apagar
    }
  };

  const nextStep = () => {
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
    <DeviceContext.Provider value={{ isOn, loading, step, setStep, togglePower, nextStep }}>
      {children}
    </DeviceContext.Provider>
  );
};
