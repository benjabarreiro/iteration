import React from "react";

export default function InformationHeading({ title, text, style }) {
  return (
    <div className="information-heading">
      <h4 className="title">{title}</h4>
      <p className={`content-text ${style} text`}>{text}</p>
    </div>
  );
}
