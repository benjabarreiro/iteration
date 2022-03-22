import React from "react";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import Desktop from "./Responsive/Desktop";
import Tablet from "./Responsive/Tablet";
import Mobile from "./Responsive/Mobile";

export default function ImgContainer2() {
  const tablet = useMediaQuery("(max-width: 768px)");
  const mobile = useMediaQuery("(max-width: 425px)");
  if ( mobile ) {
    return <Mobile />
  }

  if(tablet) {
    return <Tablet />
  }

  return <Desktop />;
}
