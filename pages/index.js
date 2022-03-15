import Banner from "../components/HomeComponents/Banner/Banner";
import HomeCta from "../components/HomeComponents/HomeCta/HomeCta";
import ImgContainer from "../components/ImgContainer/ImgContainer";
import ClientContent from "../components/HomeComponents/ClientContent/ClientContent";
import BenefitContent from "../components/HomeComponents/BenefitContent/BenefitContent";
import HomeCta2 from "../components/HomeComponents/HomeCta2/HomeCta2";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Home() {
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <div>
      <Banner />
      <HomeCta />
      <ImgContainer src="/soloDesk.jpeg" style="img-container-style-1" />
      <ClientContent style="client-content" />
      <ImgContainer src={!mobile ? "/standingDesk.jpeg" : '/standingDesk2.jpeg'} mobile="img-container2" style="img-container-style-2" />
      <BenefitContent style="benefit-content" />
      <ImgContainer src="/codingHands.jpeg" mobile="img-container3" style="img-container-style-3" />
      <HomeCta2 />
    </div>
  );
}
