import React from 'react'

export default function HomeCta1() {
	return (
		<div className="home-cta-container-1">
      <h2 className="heading title">
        We believe in the power of the iterative process
      </h2>
      <article className="home-cta-description-1 text">
        <p>
          We solve every specific business challenge you may have with a
          custom-built software solution. We develop solid, scalable, and secure
          engineering solutions to serve your business objectives.
        </p>
        <p className="text-bold first">Let’s build your website!</p>
        <p className="text-bold">Schedule a meeting with us now.</p>
      </article>
      <a href="https://calendly.com/iteration-websites/iteration-free-consultation-call" rel="noopener noreferrer" target="_blank">
        <button className="cta-button1 text-bold">
          <div className="cta-button1-text">Let’s do it</div>
        </button>
      </a>
    </div>
	)
}
