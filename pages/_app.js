import SideBar from "../components/SideBar/SideBar";
import "../styles/globals.css";
import { FilterProvider, INIT_STATE, reducer } from "../util/reducer";
import { useReducer } from "react";
function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  return (
    <>
      <FilterProvider.Provider value={{ state: state, dispatch: dispatch }}>
        <SideBar />
        <Component {...pageProps} />
      </FilterProvider.Provider>
    </>
  );
}

export default MyApp;
