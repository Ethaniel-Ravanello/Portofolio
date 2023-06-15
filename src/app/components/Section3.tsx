import React from "react";
import Image from "next/image";

import Data from "../Dummy";

const Section3 = () => {
  return (
    <section className="snap-start bg-background h-screen w-full text-text pt-[20px]">
      <div className="relative">
        <div className="w-fit h-fit mx-auto mb-10 mt-2">
          <h2 className="text-6xl font-extrabold">My Skills</h2>
          <div className="w-full h-[4px] bg-text2 mt-2"></div>
        </div>

        <div className="overflow-x-hidden pt-10 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">
          <div>
            <h2 className="font-bold text-text2 text-5xl">Akarashi</h2>
            <h3 className="my-5 text-2xl font-bold">Front End Developer</h3>
            <p className="max-w-[500px] font-lato leading-8 text-lg font-thin">
              A platform that allows gamers to explore a vast library of titles,
              search for specific games based on their preferences or genres.
            </p>
          </div>
          <div className="w-fit h-fit">
            <Image src={""} alt={""} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
