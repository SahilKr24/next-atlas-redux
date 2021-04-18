import { useReducer } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SearchBar from "../components/SearchBar/SearchBar";
import Table from "../components/Table/Table";
import { FilterProvider, INIT_STATE, reducer } from "../util/reducer";

const Layout = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  return (
    <div style={{ background: "#E5E5E5" }}>
      <MainContent>
        <Header heading="My Meetings" />
        <FilterProvider.Provider value={{ state: state, dispatch: dispatch }}>
          <SearchBar />
          <Table />
        </FilterProvider.Provider>
      </MainContent>
    </div>
  );
};

export default Layout;
