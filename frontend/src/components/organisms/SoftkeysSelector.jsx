import SoftkeysGroup from "../molecules/SoftkeysGroup";

const SoftkeysSelector = () => {
 const groups = [
    ["DrugList, ProgramOptions, Yes, BackPrime, StopAll, StartAll, PageUp, DecreaseSetting"],
    ["Standby, Therapy, A, ChangeMode, Stop A, Start A, ClearProgram, PageDown, Choose, Yes/No, KVO/Rate, IncreaseSetting"],
    ["Enter, B, Stop B, Start B, Therapy, Choose, MoreSteps, PrevSteps"],
    ["Cancel/Back, No, Options/Vol Inf, Cancel, Back"],
 ];

  return (
    <div className="flex flex-col space-y-4">
      {groups.map(( index) => (
        <SoftkeysGroup key={index}  />
      ))}
    </div>
  );
};

export default SoftkeysSelector;
