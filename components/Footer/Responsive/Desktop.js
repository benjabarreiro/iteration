import React from "react";

export default function Desktop() {
  return (
    <>
      <article>
        <div className="desktop-container">
          <h5 className="text-bold">Contact</h5>
          <ul>
            <li>WhatsApp</li>
            <li>+54 11-3569-3617</li>
          </ul>
        </div>
        <div className="footer-right-container">
          <img
            className="logo-footer link"
            src="/logos/logo-footer.png"
            alt=""
          />
          <div className="icons-container">
            <a
              href="https://www.instagram.com/it_eration/"
              className="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="icons-media "
                src="/icons-media/instagram-blanco.png"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/company/79375950"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
            >
              <img
                className="icons-media "
                src="/icons-media/linkedin-blanco.png"
                alt=""
              />
            </a>
            <a
              href="https://www.facebook.com/Iterationsoftwaredevelopment"
              className="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="icons-media "
                src="/icons-media/facebook-blanco.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </article>
      <article>
        <p className="paragraph">Privacy policy</p>
        <p className="paragraph">
          Copyright © 2022 Iteration LLC. All rights reserved
        </p>
      </article>
    </>
  );
}
