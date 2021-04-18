import Head from "next/head";
import AboutMeContent from "../../components/AboutMe/AboutMe";
import Header from "../../components/Header";
import MainContent from "../../components/MainContent";

const AboutMe = () => {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Head>
        <title>About Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <Header heading="About Me" />
        <AboutMeContent />
      </MainContent>
    </div>
  );
};

export default AboutMe;
