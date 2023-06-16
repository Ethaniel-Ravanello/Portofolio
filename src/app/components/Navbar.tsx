import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  position: string;
}

import Logo from "@images/Logo.png";
const Navbar = ({ position }: Props) => {
  return (
    <div
      className={`w-full h-fit px-2 lg:px-24 flex justify-between ${position} bg-background xl:bg-transparent top-0 z-10 text-text`}
    >
      <Link href="/">
        <div className="flex">
          <Image
            src={Logo}
            alt={"Logo Navbar"}
            className="w-[100px] h-[100px] object-contain -mr-[20px]"
          ></Image>
          <h2 className="font-semibold text-3xl py-6">Ethaniel</h2>
        </div>
      </Link>
      <div className="hidden md:flex gap-x-10 py-7 text-xl font-semibold">
        <Link href="/about-me" className="hover:text-text2">
          About Me
        </Link>
        <Link href="#project" className="hover:text-text2">
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
