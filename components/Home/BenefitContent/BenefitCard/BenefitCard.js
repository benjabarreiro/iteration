import React from "react";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

export default function BenefitCard({ video, text, style }) {
  const mobile = useMediaQuery("(max-width: 768px)")
  let classVar = mobile ? style : ''
  return (
    <div className="benefit-card">
      <img className="benefit-card-video" src={video} playsInline />
      <p className={`benefit-card-text text-medium ${classVar}`}>{text}</p>
    </div>
  );
}
