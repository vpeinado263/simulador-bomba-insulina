import { createContext, useContext, useState, useEffect } from "react";

const DeviceContext = createContext();

export const useDevice = () => useContext(DeviceContext);

export const DeviceProvider = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [inserted, setInserted] = useState(false);
  const [closed, setClosed] = useState(false);

  const togglePower = () => {
    if (!isOn) {
      setLoading(true);
      setTimeout(() => {
        setIsOn(true);
        setLoading(false);
        setStep(1);
      }, 3000);
    } else {
      setIsOn(false);
      setLoading(false);
      setStep(0);
      setInserted(false);
      setClosed(false);
    }
  };

  const nextStep = () => {
    if (step === 1) {
      setTimeout(() => {
        setStep(2);
      }, 3000);
    } else if (step === 2 && inserted && closed) {
      setStep(4);
      setTimeout(() => {
        setStep(5);
      }, 3000);
    }
  };

  useEffect(() => {
    if (inserted && closed && step === 1) {
      setStep(4);
      setTimeout(() => {
        setStep(5);
      }, 3000);
    }
  }, [inserted, closed, step]);

  return (
    <DeviceContext.Provider
      value={{
        isOn,
        loading,
        step,
        setStep,
        togglePower,
        nextStep,
        inserted,
        setInserted,
        closed,
        setClosed,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
