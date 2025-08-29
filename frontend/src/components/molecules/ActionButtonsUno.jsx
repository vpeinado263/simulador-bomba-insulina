import OnOff from "../atoms/Botones Individuales/OnOff";
import Start from "../atoms/Botones Individuales/Start";
import Stop from "../atoms/Botones Individuales/Stop";
import ChargeIndicator from "../atoms/Indicadores/ChargeIndicator";


const ActionButtonsUno = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Start />
      <Stop />
      <ChargeIndicator />
      <OnOff />
    </div>
  );
};

export default ActionButtonsUno;
