"use client";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
const dancingscript = localFont({
  src: "../fonts/DancingScript-VariableFont_wght.ttf",
  variable: "--font-dancingscript",
  weight: "100 900",
});
export default function Home() {
  return (
    <div className="flex relative">
      <div className="flex absolute">
      <Image
        className="mix-blend-darken"
        src={"/bakery.png"}
        alt="An image of vector"
        width={500}
        height={500}
      />
      <div className="flex relative top-110 right-105 text-2xl  font-black"><h1 className={`${dancingscript.className}`}>Freshly baked happiness in every bite!</h1></div>
      </div>
      <Image
        className="mix-blend-darken"
        src={"/home.jpg"}
        alt="An image of vector"
        width={1500}
        height={800}
      />
    </div>
  );
}
