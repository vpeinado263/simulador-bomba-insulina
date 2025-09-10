

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
          return (
            <StatusRow>
              <StatusLabel flex={1}>A</StatusLabel>
              <StatusLabel flex={3}>STOPPED</StatusLabel>
              <StatusLabel flex={3}>STOPPED</StatusLabel>
              <StatusLabel flex={1}>B</StatusLabel>
            </StatusRow>
          );
    };
};

export default StatusRegion;
