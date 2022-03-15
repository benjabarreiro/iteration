import React from "react";
import Image from "../../Image/Image";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export default function Banner() {
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="banner-contact">
      <Image src="/bannerHome.jpeg" style="img-banner img-banner-contact" />
      {!mobile ? (
        <div className="heading-banner-contact">
          <h2 className="main-heading-banner-contact title">
            We wanna know your project.
          </h2>
          <div className="wrapper-contact">
            <p className="secondary-heading-banner secondary-heading-banner-contact text">
              We will advise you with the most optimal technologies to solve
              your need and we will give you a personalized quote{" "}
              <span className="text-bold">for free.</span>
            </p>
          </div>
          <a
            href="https://calendly.com/iteration-websites/iteration-free-consultation-call"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="cta-button2 text-bold contact-cta-button">
              Schedule a Meeting
            </button>
          </a>
        </div>
      ) : (
        <div className="overlay-contact">
          <div className="heading-banner-contact">
            <h2 className="main-heading-banner-contact title">
              We wanna know your project.
            </h2>
            <div className="wrapper-contact">
              <p className="secondary-heading-banner secondary-heading-banner-contact">
                We will advise you with the most optimal technologies to solve
                your need and we will give you a personalized quote{" "}
                <span className="text-bold">for free.</span>
              </p>
            </div>
            <a
              href="https://calendly.com/iteration-websites/iteration-free-consultation-call"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="cta-button2 text-bold contact-cta-button">
                Schedule a Meeting
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
