const StatusRegion = ({ text }) => {
  return (
    <div>
      <div className="flex items-center">
        <span className="flex-[1] h-8 bg-green-300 flex justify-center border border-green-600 text-gray-600">
          {text}
        </span>
      </div>
    </div>
  );
};

export default StatusRegion;
