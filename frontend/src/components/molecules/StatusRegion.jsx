import StatusAB from "../atoms/StatusRegion/StatusAB";
import StatusHospira from "../atoms/StatusRegion/StatusHospira";
import StatusLabel from "../atoms/StatusRegion/StatusLabel";
import StatusRow from "../atoms/StatusRegion/StatusRow";

const StatusRegion = ({ variant }) => {
    switch (variant) {
        case "hospira":
          return <StatusHospira />;
        case "setup":
          return (
          <StatusRow>
            <StatusLabel>SETUP</StatusLabel>
          </StatusRow>
          );
        case "ab":
          return <StatusAB />;
    };
};

export default StatusRegion;
