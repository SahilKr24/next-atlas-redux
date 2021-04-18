import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SearchBar from "../components/SearchBar/SearchBar";
import Sidebar from "../components/SideBar/SideBar";
import Table from "../components/Table/Table";

const Layout = () => {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Sidebar />
      <MainContent>
        <Header />
        <SearchBar />
        <Table />
      </MainContent>
    </div>
  );
};

export default Layout;
