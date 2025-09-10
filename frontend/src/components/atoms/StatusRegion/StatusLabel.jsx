const StatusLabel = ({ children, flex = 1, bg = "bg-gren-300"}) => (
    <div className={`${bg} flex justify-center items-center border border-green-600 text-black text-xs h-8 flex-${flex}`}>
      {children}
    </div>
);

export default StatusLabel;
