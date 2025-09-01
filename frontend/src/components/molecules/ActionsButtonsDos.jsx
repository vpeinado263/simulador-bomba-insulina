import Select from "../atoms/Botones Individuales/Select";
import Silence from "../atoms/Botones Individuales/Silence";

const ActionsButtonsDos = () => {
  return (
    <div className="flex flex-col gap-7 items-center">
        <Select />
        <Silence />
    </div>
  );
};

export default ActionsButtonsDos;
