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
