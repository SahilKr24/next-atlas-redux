import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SearchBar from "../components/SearchBar/SearchBar";
import Table from "../components/Table/Table";
import Head from "next/head";

const Layout = () => {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Head>
        <title>MayaData Hackathon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <Header heading="My Meetings" />
        <SearchBar />
        <Table />
      </MainContent>
    </div>
  );
};

export default Layout;
