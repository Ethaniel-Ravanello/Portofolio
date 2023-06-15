import React from "react";
import Image from "next/image";

import Logo from "@images/Logo.png";
const Navbar = () => {
  return (
    <div className="w-full h-fit px-2 lg:px-24 flex justify-between sticky bg-background xl:bg-transparent top-0 z-10 text-text">
      <div className="flex">
        <Image
          src={Logo}
          alt={"Logo Navbar"}
          className="w-[100px] h-[100px] object-contain -mr-[20px]"
        ></Image>
        <h2 className="font-bold text-3xl py-6">Ethaniel</h2>
      </div>
      <div className="hidden md:flex gap-x-10 py-7 text-xl font-bold">
        <p>About</p>
        <p>Portofolio</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
