const SoftkeyButton = ({ label }) => {
  return (
    <div className="w-15 h-10 flex items-center justify-center bg-gray-200 border-r-2 border-gray-500">
      <button className="text-blue-950 font-bold flex items-center gap-1">
        <span className="text-2xl">▲</span>
        {label}
      </button>
    </div>
  );
};

export default SoftkeyButton;
