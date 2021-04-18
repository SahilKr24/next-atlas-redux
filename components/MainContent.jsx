const MainContent = ({ children }) => {
  return (
    <div
      style={{
        marginLeft: 235,
        padding: 40,
        paddingRight: 100,
        height: "100vh",
        transition: "0.8s ease",
      }}
    >
      {children}
    </div>
  );
};

export default MainContent;
