"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import Emteka1 from "@images/Project/Emteka/Emteka1.png";
import Emteka2 from "@images/Project/Emteka/Emteka2.png";

const Page = () => {
  return (
    <div className="w-full h-full text-text">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        className="pb-5 px-5 md:px-16 lg:px-[10em] xl:px-[19em]"
      >
        <h1 className="text-4xl lg:text-6xl font-semibold mb-10">Emteka</h1>
        <p className="max-w-[500px] leading-8">
          Emteka is a web-based assessment application designed to help you
          measure and map overall Mathematics abilities. Emteka provides an
          adaptive and personalized learning experience through advanced
          features.
        </p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeInOut" }}
          className="mt-10"
        >
          <Link
            href={"https://www.emteka.id/"}
            target="_blank"
            className="text-lg border-2 border-gray-50 rounded-full py-2 px-5 font-semibold hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          >
            Check out the Website
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
        className="bg-accent3 px-5 md:px-16 lg:px-[10em] xl:px-[19em] flex flex-wrap gap-x-20 mt-5"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full lg:w-[40%] lg:h-[40%] mx-auto my-5 box-shadow shadow-lg shadow-white/30 rounded-lg"
        >
          <Image
            src={Emteka1}
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
            src={Emteka2}
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
            <TbBrandNextjs className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full h-full"
          >
            <SiTailwindcss className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full h-full"
          >
            <SiTypescript className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
