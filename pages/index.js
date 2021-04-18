import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SearchBar from "../components/SearchBar/SearchBar";
import Table from "../components/Table/Table";

const Layout = () => {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <MainContent>
        <Header heading="My Meetings" />
        <SearchBar />
        <Table />
      </MainContent>
    </div>
  );
};

export default Layout;
