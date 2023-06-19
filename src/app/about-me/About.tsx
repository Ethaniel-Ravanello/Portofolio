"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Vector from "@images/About/Vector.png";

const About = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-background text-text h-full lg:h-screen flex-rev flex w-full lg:justify-between lg:px-32  lg:items-center"
      >
        <div className="md:mt-20 xl:-mt-40 lg:w-[50%] w-full px-5">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
            className="text-3xl md:text-6xl font-semibold mb-10 mx-auto w-fit"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
            className="leading-8 text-center lg:text-start"
          >
            As an Alterra Academy Front End graduate, I have done several
            projects using Javascript as my main programming language and
            framework/library such as ReactJS, NextJS, Tailwinds, Bootstrap and
            ChakraUI. Currently learning frameworks and languages such as
            Typescript, Next.JS, MySQL and Express.JS, Im so eager to join your
            company and see whats next to learn.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeInOut" }}
            className="leading-8 mt-8 text-center lg:text-start"
          >
            In my undertakings, I like to progress and obtain a full grasp. I
            also have a strong desire to learn and try as much new framework and
            libraries as possible. IT being an ever-changing and immensely large
            industry, I feel like Im exactly where I belong because Im
            continually learning new things, which drives me even more to
            investigate everything. Of course, if the occasion arises, I may try
            my hand at other disciplines in the future.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
          className="w-[50%] mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-full"
          >
            <Image
              src={Vector}
              alt="Vector Image"
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] lg:-mt-20 text-end lg:ml-auto object-contain mx-auto"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
