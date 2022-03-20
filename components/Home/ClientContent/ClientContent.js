import React from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import Desktop from "./Responsive/Desktop";
import Tablet from "./Responsive/Tablet";

export default function ClientContent() {
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="client-content">{!mobile ? <Desktop /> : <Tablet />}</div>
  );
}
