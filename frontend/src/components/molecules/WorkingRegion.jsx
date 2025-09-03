
const WorkingRegion = ({text1, text2}) => {
  return (
    <div>
        <div className="flex-1 flex flex-col justify-center items-center text-sm">
          <div className="flex flex-col items-center mb-10">
            <span></span>
            <span></span>
          </div>
          <div className="flex flex-col items-center mb-8">
            <span></span>
          </div>
          <div className="flex flex-col items-center mb-8">
            <span>{text1}</span>
            <span>{text2}</span>
          </div>
        </div>
    </div>
  );
};

export default WorkingRegion;
