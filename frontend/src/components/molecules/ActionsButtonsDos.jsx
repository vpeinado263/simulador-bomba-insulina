import Select from "../atoms/Botones Individuales/Select";
import Silence from "../atoms/Botones Individuales/Silence";

const ActionsButtonsDos = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <Select />
      <Silence />
    </div>
  );
};

export default ActionsButtonsDos;
