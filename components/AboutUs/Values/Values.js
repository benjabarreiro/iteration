import React from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import Desktop from "./Responsive/Desktop";
import Tablets from "./Responsive/Tablets";

export default function Values() {
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="values-content">
      <h4 className="title">Our Key values</h4>
      {!mobile ? <Desktop /> : <Tablets />}
    </div>
  );
}
