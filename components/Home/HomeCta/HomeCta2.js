import React from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export default function HomeCta2() {
  const tablet = useMediaQuery("(max-width: 768px)");
  return (
    <div className="home-cta-container2">
      <h2 className="heading title">
        Wanna take your business to the next digital level?
      </h2>
      <article className="home-cta-description2">
        {!tablet ? (
          <>
            <p className="text-thin paragraph">Schedule a meeting with us.</p>
            <p className="text-thin paragraph">
              We will advise you with the most optimal technologies to solve
              your need and we
            </p>
            <p className="text-thin paragraph">
              will give you a personalized quote{" "}
              <span className="text-bold">for free.</span>
            </p>{" "}
          </>
        ) : (
          <p className="text-thin">
            Schedule a meeting with us. We will advise you with the most optimal
            technologies to solve your need and we will give you a personalized
            quote <span className="text-bold">for free.</span>
          </p>
        )}
      </article>
      <a
        href="https://calendly.com/iteration-websites/iteration-free-consultation-call"
        rel="noopener noreferrer"
        target="_blank"
      >
        <button className="cta-button2 text-bold">Schedule a Meeting</button>
      </a>
    </div>
  );
}
