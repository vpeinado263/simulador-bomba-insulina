
const SoftkeyButton = ({onClick, label}) => {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 flex items-center justify-center border-2 border-gray-500 rounded bg-gray-200 text-blue-950 font-bold text-xl"
    >
      {label}
    </button>
  );
};

export default SoftkeyButton;
