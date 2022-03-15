import React from "react";
import Image from "../Image/Image";

export default function ImgContainer({ src, mobile, style }) {
  let classVar = mobile ? mobile : ''
  return (
    <div className={`img-container ${classVar}`}>
      <Image src={src} style={style} />
    </div>
  );
}
