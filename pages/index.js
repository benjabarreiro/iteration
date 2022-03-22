import Banner from "../components/Home/Banner/Banner";
import HomeCta1 from "../components/Home/HomeCta/HomeCta1";
import HomeCta2 from "../components/Home/HomeCta/HomeCta2";
import ImgContainer1 from "../components/Home/ImgContainer/ImgContainer1";
import ImgContainer2 from "../components/Home/ImgContainer/ImgContainer2/ImgContainer2";
import ClientContent from "../components/Home/ClientContent/ClientContent";
import ImgContainer3 from "../components/Home/ImgContainer/ImgContainer3";
import BenefitContent from "../components/Home/BenefitContent/BenefitContent";

export default function Home() {
  return (
    <div>
      <Banner />
      <HomeCta1 />
      <ImgContainer1 />
      <ClientContent />
      <ImgContainer2 />
      <BenefitContent />
      <ImgContainer3 />
      <HomeCta2 />
    </div>
  );
}
