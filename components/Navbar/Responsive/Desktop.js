import React from 'react'
import NavItem from "../../NavItem/NavItem";
import NavList from "../../NavList/NavList";
import Link from "next/link";

export default function Desktop() {
	return (
		<>
          <Link href="/">
            <img src="/logos/logoHeader.png" className="logo-header link" />
          </Link>
          <NavList>
            <NavItem navItem="About us" href="about-us" />
            <NavItem navItem="Contact" href="contact" />
          </NavList>
        </>
	)
}
