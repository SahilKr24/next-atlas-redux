const Paper = ({ children }) => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      }}
    >
      {children}
    </div>
  );
};

export default Paper;
