const SoftkeyButton = ({ label }) => {
  return (
    <div className="w-15 h-10 flex items-center justify-center bg-gray-200">
      <button>
      <img src="/softkeybutton.svg" alt="Botón softkey" width={60} height={50} />
        {label}
      </button>
    </div>
  );
};

export default SoftkeyButton;
