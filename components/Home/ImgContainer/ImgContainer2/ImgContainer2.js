import React from "react";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import Desktop from "./Responsive/Desktop";
import Tablet from "./Responsive/Tablet";

export default function ImgContainer2() {
  const mobile = useMediaQuery("(max-width: 768px)");
  return !mobile ? <Desktop /> : <Tablet />;
}
