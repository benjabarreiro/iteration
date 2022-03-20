import React from "react";

export default function Banner() {
  return (
    <div className="banner-home">
	  <img src="/background-images/bannerHome.jpeg" className="img-banner-home" alt="" loading="eager" />;
      <div className="heading-banner-home">
        <h2 className="main-heading-banner-home title">
          Iterate your way to success
        </h2>
        <div className="wrapper-home">
          <p className="secondary-heading-banner-home text">
            We are a software development agency focused on web development
          </p>
        </div>
      </div>
    </div>
  );
}
