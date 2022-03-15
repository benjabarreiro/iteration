import React from "react";

export default function Image({ src, style }) {
  return <img src={src} className={style} alt="" loading="eager" />;
}
