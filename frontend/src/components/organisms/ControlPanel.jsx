import ActionButtonsUno from "../molecules/ActionButtonsUno";
import ActionsButtonsDos from "../molecules/ActionsButtonsDos";
import NumericKeys from "../molecules/NumericKeys";

const ControlPanel = () => {
  return (
    <>
    <div className="w-full flex justify-between items-center mt-6">
      <div className="flex flex-col gap-6">
        <ActionButtonsUno />
      </div>
      <div className="flex justify-center">
        <NumericKeys />
      </div>
      <div className="flex flex-col gap-5 items-center">
        <ActionsButtonsDos />
      </div>
    </div>
    </>
  );
};

export default ControlPanel;
