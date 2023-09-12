"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiTailwindcss, SiWordpress } from "react-icons/si";

import Samara1 from "@images/Project/Samara/Samara1.jpeg";
import Samara2 from "@images/Project/Samara/Samara2.jpeg";
import Samara3 from "@images/Project/Samara/Samara3.jpeg";
import Samara4 from "@images/Project/Samara/Samara4.jpeg";

const Page = () => {
  return (
    <div className="w-full h-full text-text">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        className="pb-5 px-5 md:px-16 lg:px-[10em] xl:px-[19em]"
      >
        <h1 className="text-4xl lg:text-6xl font-semibold mb-10">
          Samara Land
        </h1>
        <p className="max-w-[500px] leading-8">
          Samara Land is a property developer that has grown to have four main
          business units: Engineering Services, Advanced Material and Equipment
          Procurement, Housing and Industrial Area Development, and Integrated
          EPC
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
        className="bg-accent3 px-5 md:px-16 lg:px-[10em] xl:px-[19em] flex flex-wrap gap-x-20"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto my-5 box-shadow shadow-lg shadow-white/30 rounded-lg"
        >
          <Image
            src={Samara1}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg"
        >
          <Image
            src={Samara2}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg"
        >
          <Image
            src={Samara3}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto mt-3 my-5 box-shadow shadow-lg shadow-white/30 rounded-lg"
        >
          <Image
            src={Samara4}
            alt="Foto Project"
            className="w-full h-full object-contain rounded-lg"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeInOut" }}
        className="w-full py-10 px-5 md:px-16 lg:px-[10em] xl:px-[19em]"
      >
        <p className="text-4xl lg:text-6xl font-semibold mb-10">Built With</p>
        <motion.div className="flex justify-center w-fit mx-auto gap-x-14">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full h-full"
          >
            <SiWordpress className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full h-full"
          >
            <SiTailwindcss className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
