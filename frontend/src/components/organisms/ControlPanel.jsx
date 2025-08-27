import OnOff from "../atoms/Botones Individuales/OnOff";
import Select from "../atoms/Botones Individuales/Select";
import Silence from "../atoms/Botones Individuales/Silence";
import Start from "../atoms/Botones Individuales/Start";
import Stop from "../atoms/Botones Individuales/Stop";
import ChargeIndicator from "../atoms/Indicadores/ChargeIndicator";
import NumericKeys from "../molecules/NumericKeys";

const ControlPanel = () => {
  return (
    <>
     <div className="w-full flex justify-between items-center mt-6">
      <div className="flex flex-col gap-4">
        <Start />
        <Stop />
        <ChargeIndicator />
        <OnOff />
      </div>
      <div className="flex justify-center">
        <NumericKeys />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Select />
        <Silence />
      </div>
    </div>
    </>
  );
};

export default ControlPanel;
