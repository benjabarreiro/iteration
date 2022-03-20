import React, { useState } from 'react'
import Link from "next/link";

export default function Tablet() {
	const [sideDrawer, setSideDrawer] = useState(false);
	return (
		<>
		<img
		  onClick={() => setSideDrawer(true)}
		  className="hamburger-icon"
		  src="./icons-ui/menu.png"
		  alt=""
		/>
		{sideDrawer && (
		  <div className="sideDrawer">
			<div className="close-icon-container">
			  <img
				onClick={() => setSideDrawer(false)}
				className="close-icon"
				src="./icons-ui/close-black.png"
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
			  <img className="sideDrawer-img" src="/illustrations/about-us.svg" alt="" />
			</div>
		  </div>
		)}
		<Link href="/">
		  <img
			src="/logos/logoHeader.png"
			className="logo-header-responsive link"
			alt=""
		  />
		</Link>
	  </>
	)
}
