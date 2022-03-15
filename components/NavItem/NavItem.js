import React from "react";
import Link from "next/link";

export default function NavItem({ navItem, href }) {
  return (
    <Link href={href}>
      <li className="text link">{navItem}</li>
    </Link>
  );
}
