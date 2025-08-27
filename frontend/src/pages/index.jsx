import DeviceLayout from '@/components/templates/DeviceLayout';
import React from 'react';

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Simulador de Bomba de Insulina
        </h1>
      </div>
      <DeviceLayout />
    </>
  );
}
