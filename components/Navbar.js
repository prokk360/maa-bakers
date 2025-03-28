import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex justify-center ">
      <nav className="flex justify-center ">
        <ul className="flex gap-5 p-5 mb-2 mt-5 text-xl font-bold">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/order">
            <li>Order</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact us</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
