import React from 'react'

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
              <img className="logo-footer link" src="/logos/logo-footer.png" alt="" />
              <div className="icons-container">
                <a href="" className="link">
                  <img
                    className="icons-media "
                    src="/icons-media/instagram-blanco.png"
                    alt=""
                  />
                </a>
                <a href="" className="link">
                  <img
                    className="icons-media "
                    src="/icons-media/linkedin-blanco.png"
                    alt=""
                  />
                </a>
                <a href="" className="link">
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
            <p>Privacy policy</p>
            <p>Copyright © 2022 Iteration LLC. All rights reserved</p>
          </article>
        </>
	)
}
