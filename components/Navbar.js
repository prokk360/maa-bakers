import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full">
      <nav className="flex justify-center w-full">
        <ul className="flex flex-wrap gap-5 p-5 mb-2 mt-5 text-lg md:text-xl font-bold justify-center">
          <Link href="/">
            <li className="cursor-pointer hover:text-gray-500">Home</li>
          </Link>
          <Link href="/order">
            <li className="cursor-pointer hover:text-gray-500">Explore</li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer hover:text-gray-500">About</li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer hover:text-gray-500">Contact us</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
