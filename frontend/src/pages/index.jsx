import DeviceLayout from '@/components/templates/DeviceLayout';
import React from 'react';

export default function Home() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Simulador de Bomba de Infusión
      </h1>
      <DeviceLayout />
    </div>
    </>
  );
}
