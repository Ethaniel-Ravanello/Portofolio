import React from "react";
import Image from "next/image";

import Ikuz1 from "@images/Project/Ikuz/ikuz.jpg";
import Ikuz2 from "@images/Project/Ikuz/ikuz2.jpg";
import Ikuz3 from "@images/Project/Ikuz/ikuz3.png";
import Ikuz4 from "@images/Project/Ikuz/ikuz4.png";

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
        <div className="w-full h-full lg:w-[70%] lg:h-[70%] mx-auto my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Ikuz1}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[70%] lg:h-[70%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Ikuz2}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[70%] lg:h-[70%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Ikuz3}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full h-full lg:w-[70%] lg:h-[70%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg">
          <Image
            src={Ikuz4}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
