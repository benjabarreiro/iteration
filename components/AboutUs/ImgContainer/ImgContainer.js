import React from "react";
import Desktop from "./Responsive/Desktop";
import Tablets from "./Responsive/Tablets";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export default function ImgContainer() {
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="img-container-about">
      {!mobile ? <Desktop /> : <Tablets />}
    </div>
  );
}
