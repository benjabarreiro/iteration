import Link from "next/link";
import Banner from "../components/AboutUsComponents/Banner/Banner";
import Mission from "../components/AboutUsComponents/Mission/Mission";
import Values from "../components/AboutUsComponents/Values/Values";
import ImgContainer from "../components/ImgContainer/ImgContainer";
import AboutCta from "../components/AboutUsComponents/AboutCta/AboutCta";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function AboutPage() {
  const image = useMediaQuery("(max-width: 768px)")
  let imgRes = image ? "/codingHands.jpeg" : "/codingHandsWhite.jpeg"
  return (
    <div style={{zIndex: 1}}>
      <Banner />
      <Mission />
      <Values />
      <ImgContainer mobile="img-container-about" src={imgRes} style="about-img-container" />
      <AboutCta />
    </div>
  );
}
