import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Footer() {
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <footer style={{fontFamily: 'Roboto-Thin'}}>
      {!mobile ? (
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
              <img className="logo-footer link" src="/logo-footer.png" alt="" />
              <div className="icons-container">
                <a href="" className="link">
                  <img
                    className="icons-media "
                    src="/instagram-blanco.png"
                    alt=""
                  />
                </a>
                <a href="" className="link">
                  <img
                    className="icons-media "
                    src="/linkedin-blanco.png"
                    alt=""
                  />
                </a>
                <a href="" className="link">
                  <img
                    className="icons-media "
                    src="/facebook-blanco.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </article>
          <article>
            <p>Privacy policy</p>
            <p>Copyright © 2022 Iteration LLC. All rights reserved</p>
          </article>
        </>
      ) : (
        <>
          <div className="mobile-logo-media-container">
            <img className="logo-footer link" src="/logo-footer.png" alt="" />
            <div className="icons-container">
              <a href="" className="link">
                <img
                  className="icons-media "
                  src="/instagram-blanco.png"
                  alt=""
                />
              </a>
              <a href="" className="link">
                <img
                  className="icons-media "
                  src="/linkedin-blanco.png"
                  alt=""
                />
              </a>
              <a href="" className="link">
                <img
                  className="icons-media "
                  src="/facebook-blanco.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="mobile-bottom-container">
            <ul>
              <li>WhatsApp</li>
              <li>+54 11-3569-3617</li>
            </ul>
            <p className="privacy">Privacy policy</p>
          </div>
          <p className="copyright">Copyright © 2022 Iteration LLC. All rights reserved</p>
        </>
      )}
    </footer>
  );
}
