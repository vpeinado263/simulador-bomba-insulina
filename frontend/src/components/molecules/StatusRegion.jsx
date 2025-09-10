import StatusAB from "../atoms/StatusRegion/StatusAB";

import StatusLabel from "../atoms/StatusRegion/StatusLabel";
import StatusRow from "../atoms/StatusRegion/StatusRow";

const StatusRegion = ({ variant }) => {
    switch (variant) {
        case "hospira":
          return (
            <StatusRow>
              <StatusLabel>HOSPIRA Plum A+</StatusLabel>
            </StatusRow>
          );
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
