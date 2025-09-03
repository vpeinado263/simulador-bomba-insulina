import ActionButtonsUno from "../molecules/ActionButtonsUno";
import ActionsButtonsDos from "../molecules/ActionsButtonsDos";
import NumericKeys from "../molecules/NumericKeys";

const ControlPanel = () => {
  return (
    <>
      <div className="flex justify-between gap-5">
        <div>
          <ActionButtonsUno />
        </div>
        <div>
          <NumericKeys />
        </div>
        <div>
          <ActionsButtonsDos />
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
