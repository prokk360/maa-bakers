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
    <div className="flex relative w-full">
      <Image
        className="mix-blend-darken object-cover"
        src={"/home.png"}
        alt="An image of vector"
        width={1500}
        height={800}
        layout="responsive"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1500px"
      />
    </div>
  );
}
