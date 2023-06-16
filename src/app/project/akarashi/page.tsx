import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

import Aka1 from "@images/Project/Akarashi/Aka1.jpeg";
import Aka2 from "@images/Project/Akarashi/Aka2.jpeg";
import Aka3 from "@images/Project/Akarashi/Aka3.jpeg";
import Aka4 from "@images/Project/Akarashi/Aka4.jpeg";

import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiRedux } from "react-icons/si";

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
        <h1 className="text-4xl lg:text-6xl font-semibold mb-10">Akarashi</h1>
        <p className="max-w-[500px] leading-8">
          A platform that allows gamers to explore a vast library of titles,
          search for specific games based on their preferences or genres.
        </p>
      </div>
      <div className="bg-accent3 px-5 md:px-16 lg:px-[10em] xl:px-[19em] flex flex-wrap gap-x-20">
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Aka1}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Aka2}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Aka3}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Aka4}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
      <div className="w-full py-10 px-5 md:px-16 lg:px-[10em] xl:px-[19em]">
        <p className="text-4xl lg:text-6xl font-semibold mb-10">Built With</p>
        <div className="flex justify-center w-fit mx-auto gap-x-14 ">
          <div className="w-full h-full">
            <FaReact className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28" />
          </div>

          <div className="w-full h-full">
            <SiTailwindcss className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28" />
          </div>

          <div className="w-full h-full">
            <SiTypescript className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28" />
          </div>

          <div className="w-full h-full">
            <SiRedux className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;