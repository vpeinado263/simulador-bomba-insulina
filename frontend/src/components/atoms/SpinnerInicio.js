const SpinnerInicio = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen space-y-6">
        <h1 className="text-2xl font-bold">Protocolo de Infusión</h1>

        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        <h2 className="text-xl">Insulina</h2>
      </div>
    </>
  );
};

export default SpinnerInicio;
