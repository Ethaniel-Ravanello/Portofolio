import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@images/Logo.png";
const Navbar = () => {
  return (
    <div
      className={`w-full h-fit px-5 md:px-16 lg:px-[10em] xl:px-[19em] flex justify-between $ bg-background xl:bg-transparent  text-text`}
    >
      <Link href="/">
        <div className="flex">
          <div className="w-full h-full -ml-8">
            <Image
              src={Logo}
              alt={"Logo Navbar"}
              className="w-full h-full object-contain  pt-2.5"
            ></Image>
          </div>
          <h2 className="font-semibold text-3xl pt-8 -ml-8">Ethaniel</h2>
        </div>
      </Link>
      <div className="hidden md:flex gap-x-10 py-7 text-xl font-semibold">
        <Link href="/about-me" className="hover:text-text2">
          About Me
        </Link>
        <Link href="/#project" className="hover:text-text2">
          Project
        </Link>
        <Link href="/about-me" className="hover:text-text2">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
