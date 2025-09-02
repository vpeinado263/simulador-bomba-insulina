const SoftkeyButton = ({ label }) => {
  return (
    <div className="w-14 h-7 flex items-center justify-center bg-gray-200">
      <button>
      <img src="/softkeybutton.svg" alt="Botón softkey" width={45} height={45} />
        {label}
      </button>
    </div>
  );
};

export default SoftkeyButton;
