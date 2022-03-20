import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Desktop from "./Responsive/Desktop";
import Tablet from "./Responsive/Tablet";

export default function Footer() {
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <footer style={{fontFamily: 'Roboto-Thin'}}>
      {!mobile ? (
        <Desktop />
      ) : (
        <Tablet />
      )}
    </footer>
  );
}
