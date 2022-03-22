import React from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import Tablet from "./Responsive/Tablet";
import Desktop from "./Responsive/Desktop";

export default function Banner() {
  const mobile = useMediaQuery("(max-width: 425px)");
  const tablet = useMediaQuery("(max-width: 768px)");
  const img =
    !mobile && tablet
      ? "/background-images/contactBanner.jpeg"
      : "/background-images/bannerHome.jpeg";
  return (
    <div className="banner-contact">
      <img src={img} className="img-banner-contact" />
      {!tablet ? <Desktop /> : <Tablet />}
    </div>
  );
}
