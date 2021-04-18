import { useContext } from "react";
import { FilterProvider } from "../util/reducer";

const MainContent = ({ children }) => {
  const { state } = useContext(FilterProvider);
  const status = state.status;
  return (
    <div
      style={{
        marginLeft: status ? 235 : 70,
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
