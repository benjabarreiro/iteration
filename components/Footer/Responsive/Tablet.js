import React from 'react'

export default function Tablet() {
	return (
		<>
          <div className="mobile-logo-media-container">
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
          <div className="mobile-bottom-container">
            <ul>
              <li>WhatsApp</li>
              <li>+54 11-3569-3617</li>
            </ul>
            <p className="privacy">Privacy policy</p>
          </div>
          <p className="copyright">Copyright © 2022 Iteration LLC. All rights reserved</p>
        </>
	)
}
