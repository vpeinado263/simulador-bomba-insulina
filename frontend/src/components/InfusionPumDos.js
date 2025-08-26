import React, { useState } from 'react'

const InfusionPumDos = () => {
    const [canalActivo, setCanalActivo] = useState("A");
    const [pantalla, setPantalla] = useState("menu"); // "menu" | "dosis" | "carga" | "pases"
    const [datos, setDatos] = useState({
      A: { dosis: null, carga: null, pases: null },
      B: { dosis: null, carga: null, pases: null },
    });
  
    // Cambiar valores del canal activo
    const actualizarDato = (campo, valor) => {
      setDatos((prev) => ({
        ...prev,
        [canalActivo]: { ...prev[canalActivo], [campo]: valor },
      }));
    };
  return (
    <>
        <div className="bg-white shadow-lg rounded-xl p-4 flex w-[600px]">
      {/* Casete único */}
      <div className="w-1/3 flex flex-col items-center justify-center border-r pr-2">
        <div className="w-20 h-28 bg-gray-200 border-2 border-gray-400 rounded-md flex flex-col items-center justify-evenly p-2">
          <span className="text-xs font-bold">Casete</span>

          <div
            onClick={() => { setCanalActivo("A"); setPantalla("menu"); }}
            className="cursor-pointer flex items-center gap-1"
          >
            <div className="w-2 h-12 bg-blue-400 rounded"></div>
            <span className="text-xs">Canal A</span>
          </div>

          <div
            onClick={() => { setCanalActivo("B"); setPantalla("menu"); }}
            className="cursor-pointer flex items-center gap-1"
          >
            <div className="w-2 h-12 bg-green-400 rounded"></div>
            <span className="text-xs">Canal B</span>
          </div>
        </div>
      </div>

      {/* Pantalla + teclado */}
      <div className="w-2/3 pl-4 flex flex-col">
        {/* Pantalla */}
        <div className="bg-green-100 border rounded-md p-2 mb-4 h-32">
          <p className="text-sm font-bold">
            CANAL {canalActivo} - {pantalla.toUpperCase()}
          </p>

          {pantalla === "menu" && (
            <ul className="text-xs mt-1 space-y-1">
              <li className="cursor-pointer" onClick={() => setPantalla("dosis")}>• Cálculo de dosis</li>
              <li className="cursor-pointer" onClick={() => setPantalla("carga")}>• Dosis de carga</li>
              <li className="cursor-pointer" onClick={() => setPantalla("pases")}>• Pases múltiples</li>
            </ul>
          )}

          {pantalla === "dosis" && (
            <div className="text-xs">
              <p>Ingresar dosis (mg):</p>
              <p className="font-bold">{datos[canalActivo].dosis ?? "----"}</p>
            </div>
          )}

          {pantalla === "carga" && (
            <div className="text-xs">
              <p>Ingresar dosis de carga (ml):</p>
              <p className="font-bold">{datos[canalActivo].carga ?? "----"}</p>
            </div>
          )}

          {pantalla === "pases" && (
            <div className="text-xs">
              <p>Número de pases:</p>
              <p className="font-bold">{datos[canalActivo].pases ?? "----"}</p>
            </div>
          )}
        </div>

        {/* Teclado */}
        <div className="grid grid-cols-4 gap-2">
          {["1","2","3","4","5","6","7","8","9","0"].map((key) => (
            <button
              key={key}
              className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full"
              onClick={() => {
                if (pantalla !== "menu") {
                  const campo = pantalla; // "dosis" | "carga" | "pases"
                  const actual = datos[canalActivo][campo] ?? "";
                  actualizarDato(campo, actual + key);
                }
              }}
            >
              {key}
            </button>
          ))}
          <button className="bg-green-500 text-white p-3 rounded-full" onClick={() => setPantalla("menu")}>
            OK
          </button>
          <button className="bg-yellow-400 text-black p-3 rounded-full" onClick={() => {
            const campo = pantalla;
            actualizarDato(campo, null);
          }}>
            CLR
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default InfusionPumDos
