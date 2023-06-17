import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

import Iku1 from "@images/Project/Ikuz/ikuz.jpg";
import Iku2 from "@images/Project/Ikuz/ikuz2.png";
import Iku3 from "@images/Project/Ikuz/ikuz3.png";
import Iku4 from "@images/Project/Ikuz/ikuz4.png";

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
        <h1 className="text-4xl lg:text-6xl font-semibold mb-10">Ikuzports</h1>
        <p className="max-w-[500px] leading-8">
          Ikuzports is a website for sport lover to find a new friend to play
          together, user there can find an event with their desire sport and you
          can join a club too to play together within the same area or same kind
          of sport
        </p>
      </div>
      <div className="bg-accent3 px-5 md:px-16 lg:px-[10em] xl:px-[19em] flex flex-wrap gap-x-20">
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Iku1}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Iku3}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Iku4}
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
