
const SoftkeyButton = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="w-12 h-12 flex items-center justify-center border-2 border-gray-500 rounded bg-gray-200 text-blue-950 font-bold text-xl"
      >
        ▲
      </button>
    );
  };
  
  export default SoftkeyButton;
  