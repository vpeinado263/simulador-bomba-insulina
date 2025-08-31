import SoftkeysGroup from "../molecules/SoftkeysGroup";

const SoftkeysSelector = () => {
 const groups = [
    [""],
    [""],
    [""],
    [""],
 ];

  return (
    <div className="inline-flex gap-7">
      {groups.map((labels, index) => (
        <SoftkeysGroup key={index} labels={labels}  />
      ))}
    </div>
  );
};

export default SoftkeysSelector;
