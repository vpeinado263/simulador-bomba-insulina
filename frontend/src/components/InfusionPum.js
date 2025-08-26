import React from 'react';

const InfusionPum = () => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-xl p-4 flex w-[500px]">
        <div className="w-1/3 flex flex-col items-center justify-center border-r pr-2">
          <div className="w-16 h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
            <span className="text-xs text-gray-600">Canal A</span>
          </div>
          <div className="w-16 h-32 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-600">Canal B</span>
          </div>
        </div>

        <div className="w-2/3 pl-4 flex flex-col">
          <div className="bg-green-100 border rounded-md p-2 mb-4 h-32">
            <p className="text-sm font-bold">PROGRAMAR</p>
            <ul className="text-xs mt-1">
              <li>• Cálculo de dosis</li>
              <li>• Dosis de carga</li>
              <li>• Pases múltiples</li>
            </ul>
          </div>

          <div className="flex justify-between mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '←'].map(
              (key) => (
                <button
                  key={key}
                  className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full"
                >
                  {key}
                </button>
              )
            )}
            <button className="bg-green-500 text-white p-3 rounded-full">
              ON
            </button>
            <button className="bg-red-500 text-white p-3 rounded-full">
              OFF
            </button>
            <button className="bg-yellow-400 text-black p-3 rounded-full">
              ▶
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfusionPum;
