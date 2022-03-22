import React from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export default function ImgContainer3() {
  const tablet = useMediaQuery("(max-width: 768px)");
  const mobile = useMediaQuery("(max-width: 425px)");
  return (
    <div className="home-img-container-3">
      {tablet && !mobile ? (
        <img
          src="/background-images/codingHands2.jpeg"
          className="img-container-style-3"
          alt=""
        />
      ) : (
        <img
          src="/background-images/codingHands.jpeg"
          className="img-container-style-3"
          alt=""
        />
      )}
    </div>
  );
}
