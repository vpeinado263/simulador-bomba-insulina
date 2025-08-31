import ButtonNumeric from "../atoms/Botones Individuales/ButtonNumeric";

const NumericKeys = () => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'CLEAR', '0', '.'];
  return (
    <div className="grid grid-cols-3 gap-4">
      {keys.map(key => (
          <ButtonNumeric key={key} label={key} />
      ))}
    </div>
  );
};

export default NumericKeys;
