import React from "react";
import Image from "../../Image/Image";

export default function Banner() {
  return (
    <div className="banner">
      <Image src="/bannerHome.jpeg" style="img-banner img-banner-home" />
      <div className="heading-banner">
        <h2 className="main-heading-banner title">Iterate your way to success</h2>
        <div className="wrapper">
          <p className="secondary-heading-banner text">
            We are a software development agency focused on web development
          </p>
        </div>
      </div>
    </div>
  );
}
