import React from "react";

export default function Desktop() {
  return (
    <div className="heading-banner-contact">
      <h2 className="main-heading-banner-contact title">
        We wanna know your project.
      </h2>
      <div className="wrapper-contact">
        <p className="secondary-heading-banner-contact text">
          We will advise you with the most optimal technologies to solve your
          need and we will give you a personalized quote{" "}
          <span className="text-bold">for free.</span>
        </p>
      </div>
      <a
        href="https://calendly.com/iteration-websites/iteration-free-consultation-call"
        rel="noopener noreferrer"
        target="_blank"
      >
        <button className="text-bold contact-cta-button">
          Schedule a Meeting
        </button>
      </a>
    </div>
  );
}
