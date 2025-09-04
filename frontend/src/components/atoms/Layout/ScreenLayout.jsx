const ScreenLayout = ({ children }) => {
  return (
    <div className="w-64 h-60 bg-green-200 flex flex-col justify-between rounded-md">
      {children}
    </div>
  );
};

export default ScreenLayout;
