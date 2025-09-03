const SoftkeyButton = ({ label }) => {
  return (
    <button className="w-16 h-7 flex items-center justify-center bg-gray-200 hover:bg-gray-300 border">
      <img src="/softkeybutton.svg" alt="Botón softkey" width={60} />
      {label}
    </button>
  );
};

export default SoftkeyButton;
