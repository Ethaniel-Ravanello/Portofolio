"use client";

import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.div
      className="snap-start bg-background h-screen w-full flex justify-center items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="-mt-40">
        <motion.h1
          className="text-4xl md:text-7xl font-semibold text-center"
          variants={textVariants}
        >
          Ethaniel Ravanello
        </motion.h1>
        <motion.h2
          className="mx-auto w-fit text-2xl md:text-4xl font-semibold mt-4 text-center"
          variants={textVariants}
        >
          Passionate <span className="text-text2">Front End Developer</span>
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Section1;
