import React from 'react';
import { useState } from 'react';

const [dosis, setDosis] = useState("");
  const [volumen, setVolumen] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularInfusion = () => {
    if (!dosis || !volumen || !tiempo) return;

    // Ejemplo simple: velocidad de infusión (ml/h)
    const velocidad = (parseFloat(volumen) / parseFloat(tiempo)) * 60;
    setResultado(velocidad.toFixed(2));
  };

const InfusionCalculator = () => {
  return (
    <>
     <div className="p-4 max-w-md mx-auto bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold mb-4">Cálculo de Infusión</h2>

      <div className="mb-2">
        <label className="block">Dosis (mg)</label>
        <input
          type="number"
          value={dosis}
          onChange={(e) => setDosis(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>

      <div className="mb-2">
        <label className="block">Volumen (ml)</label>
        <input
          type="number"
          value={volumen}
          onChange={(e) => setVolumen(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>

      <div className="mb-2">
        <label className="block">Tiempo (min)</label>
        <input
          type="number"
          value={tiempo}
          onChange={(e) => setTiempo(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>

      <button
        onClick={calcularInfusion}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Calcular
      </button>

      {resultado && (
        <p className="mt-4 text-lg font-semibold">
          Velocidad de infusión: {resultado} ml/h
        </p>
      )}
    </div>
      
    </>
  )
}

export default InfusionCalculator;
