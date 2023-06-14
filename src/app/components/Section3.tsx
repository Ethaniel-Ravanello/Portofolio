"use client";
import React from "react";
import Image from "next/image";

import Akarashi from "@images/First.png";
import next from "next/types";

const Section3 = () => {
  const nextSlide = () => {
    let activeSlide = document.querySelector(".slide.translate-x-0");
    activeSlide?.classList.remove("translate-x-0");
    activeSlide?.classList.add("-translate-x-full");

    let nextSlide = activeSlide?.nextElementSibling;
    nextSlide?.classList.remove("translate-x-full");
    nextSlide?.classList.add("translate-x-0");
  };

  const previousSlide = () => {
    let activeSlide = document.querySelector(".slide.translate-x-0");
    activeSlide?.classList.remove("translate-x-0");
    activeSlide?.classList.add("translate-x-full");

    let previousSlide = activeSlide?.previousElementSibling;
    previousSlide?.classList.remove("-translate-x-full");
    previousSlide?.classList.add("translate-x-0");
  };
  return (
    <section className="snap-start bg-background h-screen w-screen text-text">
      <div className="relative">
        <div className="absolute inset-0 w-screen h-screen  text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">
          <div>
            <h2 className="font-bold text-text2 text-5xl">Akarashi</h2>
            <h3 className="my-5 text-2xl font-bold">Front End Developer</h3>
            <p className="max-w-[500px] font-lato leading-8 text-lg font-thin">
              A platform that allows gamers to explore a vast library of titles,
              search for specific games based on their preferences or genres.
            </p>
          </div>
          <div>
            <Image src={Akarashi} alt={""} />
          </div>
        </div>
        <div className="absolute inset-0 w-screen h-screen  text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
          <div>
            <h2 className="font-bold text-text2 text-5xl">Akarashi</h2>
            <h3 className="my-5 text-2xl font-bold">Front End Developer</h3>
            <p className="max-w-[500px] font-lato leading-8 text-lg font-thin">
              A platform that allows gamers to explore a vast library of titles,
              search for specific games based on their preferences or genres.
            </p>
          </div>
          <div>
            <Image src={Akarashi} alt={""} />
          </div>
        </div>
      </div>
      <div className="flex justify-between align-middle items-center w-full h-full">
        <button
          onClick={() => previousSlide()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Left Button
        </button>
        <button
          onClick={() => nextSlide()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Right Button
        </button>
      </div>
    </section>
  );
};

export default Section3;
