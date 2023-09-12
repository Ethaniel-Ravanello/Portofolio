"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
    <motion.section
      id="project"
      key={Data[index].id}
      className="snap-start bg-background h-full md:h-screen w-full text-text pt-[210px] px-5 lg:px-2 xl:px-16"
    >
      <div className="relative">
        <div className="w-fit h-fit mx-auto mb-10 mt-2">
          <h2 className="text-3xl md:text-6xl font-semibold">My Projects</h2>
          <div className="w-full h-[4px] bg-text2 mt-2"></div>
        </div>

        <div
          key={Data[index].id}
          className="overflow-x-hidden text-white block lg:flex items-center justify-center text-5xl transition-all ease-in-out transform translate-x-0 duration-500"
        >
          <div className="block lg:flex items-center justify-center px-5">
            <div className="h-full">
              <motion.h2
                className="font-bold text-text2 text-3xl md:text-5xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
              >
                {Data[index].id}. {Data[index].name}
              </motion.h2>
              <motion.h3
                className="my-5 text-2xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
              >
                {Data[index].role}
              </motion.h3>
              <motion.p
                className="max-w-[500px] font-lato leading-8 text-lg font-thin"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeInOut" }}
              >
                {Data[index].desc}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeInOut" }}
                className="mt-10 w-fit mx-auto md:mx-0"
              >
                <Link
                  href={Data[index].href}
                  className="text-lg border-2 border-gray-50 rounded-full py-2 px-5 font-semibold hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                >
                  See more
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="w-fit h-fit mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={Data[index].img}
                alt={""}
                className="duration-500 ease-in-out"
              />
            </motion.div>
          </div>

          <div
            onClick={prevSlide}
            className="absolute top-[57%] md:top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl p-2 bg-white/10 text-white cursor-pointer rounded-full"
          >
            <BsChevronCompactLeft />
          </div>
          <div
            onClick={nextSlide}
            className="absolute top-[57%] md:top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl p-2 bg-white/10 text-white cursor-pointer rounded-full"
          >
            <BsChevronCompactRight />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Section3;
