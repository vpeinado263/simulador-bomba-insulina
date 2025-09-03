import SoftkeyButton from "../atoms/Botones Individuales/SoftkeyButton";

const SoftkeysGroup = ({ labels }) => {
  return (
    <div>
      {labels.map((label, index) => (
        <SoftkeyButton key={index} label={label} />
      ))}
    </div>
  );
};

export default SoftkeysGroup;
