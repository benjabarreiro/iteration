import React from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import Desktop from "./Responsive/Desktop";
import Tablets from "./Responsive/Tablets";

export default function Banner() {
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="banner-about">
      {!mobile ? <Desktop /> : <Tablets />}
      <div className="overlay">
        <p className="text banner-about-text">
          Iteration is a professional software services provider specialized in
          delivering fully managed web solutions based on{" "}
          <span className="text-bold banner-highlight">
            agile methodologies.
          </span>
        </p>
        <img className="arrow-about" src="./icons-ui/arrow.png" alt="" />
      </div>
    </div>
  );
}
