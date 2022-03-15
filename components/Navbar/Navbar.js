import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import NavList from "../NavList/NavList";
import Link from "next/link";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Navbar() {
  const [sideDrawer, setSideDrawer] = useState(false);
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <header>
      {!mobile && (
        <>
          <Link href="/">
            <img src="/logoHeader.png" className="logo-header link" />
          </Link>
          <NavList>
            <NavItem navItem="About us" href="about-us" />
            <NavItem navItem="Contact" href="contact" />
          </NavList>
        </>
      )}
      {mobile && (
        <>
          <img
            onClick={() => setSideDrawer(true)}
            className="hamburger-icon"
            src="./menu.png"
            alt=""
          />
          {sideDrawer && (
            <div className="sideDrawer">
              <div className="close-icon-container">
                <img
                  onClick={() => setSideDrawer(false)}
                  className="close-icon"
                  src="./close-black.png"
                  alt=""
                />
              </div>
              <ul className="sideDrawer-menu">
                <Link href="/about-us">
                  <li onClick={() => setSideDrawer(false)} className="sideDrawer-item text-bold">About us</li>
                </Link>
                <Link href="contact">
                  <li onClick={() => setSideDrawer(false)} className="sideDrawer-item text-bold">Contact</li>
                </Link>
                <li className="sideDrawer-item text-bold">Blog (Developing)</li>
              </ul>
              <div className="sideDrawer-img-container">
                <img className="sideDrawer-img" src="/about-us.svg" alt="" />
              </div>
            </div>
          )}
          <Link href="/">
            <img
              src="/logoHeader.png"
              className="logo-header-responsive link"
              alt=""
            />
          </Link>
        </>
      )}
    </header>
  );
}
