"use client";

import React, { useState } from "react";
import Image from "next/image";

import Data from "../Dummy";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Section3 = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    const firstSlide = index === 0;
    const newIndex = firstSlide ? Data.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const nextSlide = () => {
    const lastSlide = index === Data.length - 1;
    const newIndex = lastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <section className="snap-start bg-background h-screen w-full text-text pt-[100px] px-28">
      <div className="relative">
        <div className="w-fit h-fit mx-auto mb-10 mt-2">
          <h2 className="text-6xl font-extrabold">My Projects</h2>
          <div className="w-full h-[4px] bg-text2 mt-2"></div>
        </div>

        <div
          key={Data[index].id}
          className="overflow-x-hidden pt-10 text-white flex items-center justify-center text-5xl transition-all ease-in-out transform translate-x-0 duration-500"
        >
          <div>
            <h2 className="font-bold text-text2 text-5xl animate-fade-in">
              {Data[index].id}. {Data[index].name}
            </h2>
            <h3 className="my-5 text-2xl font-bold animate-fade-in">
              {Data[index].role}
            </h3>
            <p className="max-w-[500px] font-lato leading-8 text-lg font-thin animate-fade-in">
              {Data[index].desc}
            </p>
          </div>

          <div className="w-fit h-fit">
            <Image
              src={Data[index].img}
              alt={""}
              className="duration-500 ease-in-out animate-fade-in"
            />
          </div>

          <div
            onClick={prevSlide}
            className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl p-2 bg-white/10 text-white cursor-pointer rounded-full"
          >
            <BsChevronCompactLeft />
          </div>
          <div
            onClick={nextSlide}
            className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl p-2 bg-white/10 text-white cursor-pointer rounded-full"
          >
            <BsChevronCompactRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
