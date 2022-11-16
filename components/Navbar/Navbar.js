import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link href="/">
          Home
        </Link>

        <Link href="/about">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
