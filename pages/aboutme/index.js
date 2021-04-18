import AboutMeContent from "../../components/AboutMe/AboutMe";
import Header from "../../components/Header";
import MainContent from "../../components/MainContent";

const AboutMe = () => {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <MainContent>
        <Header heading="About Me" />
        <AboutMeContent />
      </MainContent>
    </div>
  );
};

export default AboutMe;
