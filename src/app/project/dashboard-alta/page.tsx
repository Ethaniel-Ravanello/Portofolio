import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

import Alta1 from "@images/Project/Alta/Alta1.jpg";
import Alta2 from "@images/Project/Alta/Alta2.png";
import Alta3 from "@images/Project/Alta/Alta3.png";
import Alta4 from "@images/Project/Alta/Alta4.png";
import Alta5 from "@images/Project/Alta/Alta5.png";

import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiRedux } from "react-icons/si";

export const metadata: Metadata = {
  title: "Ethaniel | Project | Ikuzports",
  description: "Some of my project",
  icons: {
    icon: "/favicon.ico",
  },
};

const page = () => {
  return (
    <div className="w-full h-full  text-text ">
      <div className="pb-5 px-5 md:px-16 lg:px-[10em] xl:px-[19em]">
        <h1 className="text-4xl lg:text-6xl font-semibold mb-10">
          Dashboard Alta
        </h1>
        <p className="max-w-[500px] leading-8">
          Dashboard Alta is an application to simplify Alta team in managing
          mentees, mentors, and classes which becomes one application portal by
          making this dashboard
        </p>
      </div>
      <div className="bg-accent3 px-5 md:px-16 lg:px-[10em] xl:px-[19em] flex flex-wrap gap-x-20">
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Alta1}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Alta2}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Alta3}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Alta4}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Alta5}
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
            <SiJavascript className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28" />
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
