import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

import Gp1 from "@images/Project/Green/Gp1.jpeg";
import Gp2 from "@images/Project/Green/Gp2.jpeg";
import Gp3 from "@images/Project/Green/Gp3.jpeg";
import Gp4 from "@images/Project/Green/Gp4.jpeg";

import { SiTailwindcss, SiWordpress } from "react-icons/si";

export const metadata: Metadata = {
  title: "Ethaniel | Project | Akarashi",
  description: "About Me Page",
  icons: {
    icon: "/favicon.ico",
  },
};

const page = () => {
  return (
    <div className="w-full h-full  text-text ">
      <div className="pb-5 px-5 md:px-16 lg:px-[10em] xl:px-[19em]">
        <h1 className="text-4xl lg:text-6xl font-semibold mb-10">
          Green Paradise
        </h1>
        <p className="max-w-[500px] leading-8">
          Green Paradies is a platform for the SamaraLand Developer made for
          people who are looking to buy a house or many more
        </p>
      </div>
      <div className="bg-accent3 px-5 md:px-16 lg:px-[10em] xl:px-[19em] flex flex-wrap gap-x-20">
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Gp1}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Gp2}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Gp3}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Gp4}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center w-fit mx-auto gap-x-14 ">
        <div className="w-full h-full">
          <SiWordpress className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28" />
        </div>

        <div className="w-full h-full">
          <SiTailwindcss className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28" />
        </div>
      </div>
    </div>
  );
};

export default page;
