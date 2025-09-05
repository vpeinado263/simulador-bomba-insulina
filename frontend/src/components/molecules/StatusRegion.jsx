import StatusAB from "../atoms/StatusRegion/StatusAB";
import StatusHospira from "../atoms/StatusRegion/StatusHospira";
import StatusSetup from "../atoms/StatusRegion/StatusSetup";

const StatusRegion = ({ variant }) => {
    switch (variant) {
        case "hospira":
          return <StatusHospira />;
        case "setup":
          return <StatusSetup />;
        case "ab":
          return <StatusAB />;
    };
};

export default StatusRegion;
