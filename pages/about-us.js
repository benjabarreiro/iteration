import Banner from "../components/AboutUs/Banner/Banner";
import Mission from "../components/AboutUs/Mission/Mission";
import Values from "../components/AboutUs/Values/Values";
import ImgContainer from "../components/AboutUs/ImgContainer/ImgContainer";
import AboutCta from "../components/AboutUs/AboutCta/AboutCta";

export default function AboutPage() {
  return (
    <div style={{zIndex: 1}}>
      <Banner />
      <Mission />
      <Values />
      <ImgContainer />
      <AboutCta />
    </div>
  );
}
