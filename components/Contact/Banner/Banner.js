import React from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import Tablet from "./Responsive/Tablet";
import Desktop from "./Responsive/Desktop";

export default function Banner() {
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="banner-contact">
      <img
        src="/background-images/bannerHome.jpeg"
        className="img-banner-contact"
      />
      {!mobile ? <Desktop /> : <Tablet />}
    </div>
  );
}
