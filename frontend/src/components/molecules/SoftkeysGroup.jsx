import SoftkeyButton from "../atoms/Botones Individuales/SoftkeyButton";

const SoftkeysGroup = () => {
  return (
    <div className="inline-flex border-2 border-gray-500 rounded overflow-hidden">
    {labels.map((index) => (
      <SoftkeyButton key={index} />
    ))}
  </div>
  );
};

export default SoftkeysGroup;

