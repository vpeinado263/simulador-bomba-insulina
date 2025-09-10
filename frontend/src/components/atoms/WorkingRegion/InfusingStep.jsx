const InfusingStep = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center text-blue-950"> 
      <div className="flex items-center gap-12 mb-3">
        <span className="text-xl">0</span> 
        <div className="flex flex-col items-center leading-tight">
          <span className="text-sm">Rate</span>
          <span className="text-xs">mL/h</span>
        </div> 
        <span className="text-xl">0</span>
      </div>
      <div className="flex items-center gap-11 mb-3">
        <span className="text-xl">0</span>  
        <div className="flex flex-col items-center leading-tight">
          <span className="text-sm">VolInf</span>
          <span className="text-xs">mL</span>
        </div>   
        <span className="text-xl">0</span>
      </div>
    </div>
  );
};

export default InfusingStep;
