import React from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery';

export default function AboutCta() {
	const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="about-cta">
      <div className="about-cta-container">
        <h2 className="title about-cta-title">
          Wanna take your business to the next digital level?
        </h2>
        <p className="text">Schedule a meeting with us.</p>
        <p className="text">
          We will advise you with the most optimal technologies to solve your
          need and we
        </p>
        <p className="text">will give you a personalized quote for free.</p>
        <a href="https://calendly.com/iteration-websites/iteration-free-consultation-call" rel="noopener noreferrer" target="_blank">
          <button className="cta-button2 text-bold about-cta-button">
            Schedule a Meeting
          </button>
        </a>
      </div>
      {!mobile && <img className="about-cta-img" src="./about-us.svg" alt="" />}
    </div>
  );
}
