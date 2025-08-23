import SpinnerInicio from '@/components/atoms/SpinnerInicio';
import InfusionCalculator from '@/components/InfusionCalculator';
import { useState, useEffect } from 'react';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [])
  
  return (
    <>
    {isLoading ? (
      <SpinnerInicio />
    ) : (
      <div>
        <h1 className="text-3xl font-bold mb-4">
        Simulador de Bomba de Insulina
      </h1>
      <InfusionCalculator />
      </div>
    )}
      
    </>
  )
};
