import React from "react";
import Image from "../../Image/Image";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export default function Banner() {
  const mobile = useMediaQuery("(max-width: 768px)");
  let imgRes = mobile ? "./bannerHome2.jpeg" : "./bannerHome.jpeg";
  return (
    <div className="banner banner-about">
      <Image src={imgRes} style="img-banner-about-us" />
      <div className="overlay">
        <p className="text banner-about-text">
          Iteration is a professional software services provider specialized in
          delivering fully managed web solutions based on{" "}
          <span className="text-bold banner-highlight">
            agile methodologies.
          </span>
        </p>
        <img className="arrow-about" src="./arrow.png" alt="" />
      </div>
    </div>
  );
}
