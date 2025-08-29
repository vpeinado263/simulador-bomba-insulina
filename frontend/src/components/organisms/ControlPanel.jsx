import Select from "../atoms/Botones Individuales/Select";
import Silence from "../atoms/Botones Individuales/Silence";
import ActionButtonsUno from "../molecules/ActionButtonsUno";
import NumericKeys from "../molecules/NumericKeys";

const ControlPanel = () => {
  return (
    <>
    <div className="w-full flex justify-between items-center mt-6">
      <div className="flex flex-col gap-10">
        <ActionButtonsUno />
      </div>
      <div className="flex justify-center">
        <NumericKeys />
      </div>
      <div className="flex flex-col gap-5 items-center">
        <Select />
        <Silence />
      </div>
    </div>
    </>
  );
};

export default ControlPanel;
