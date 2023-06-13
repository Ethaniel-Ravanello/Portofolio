import React from "react";
import Image from "next/image";

import Logo from "@images/Logo.png";
const Navbar = () => {
  return (
    <div className="w-full h-fit py-2 px-28 bg-background flex justify-between absolute top-0">
      <div className="flex">
        <Image
          src={Logo}
          alt={"Logo Navbar"}
          className="w-[100px] h-[100px] object-contain -mr-[20px]"
        ></Image>
        <h2 className="font-bold text-3xl py-6">Ethaniel</h2>
      </div>
      <div className="flex gap-x-10 py-8 text-xl font-bold">
        <p>About</p>
        <p>Portofolio</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
