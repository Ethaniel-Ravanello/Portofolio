"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import Image from "next/image";

import Html from "@images/Skills/Html.png";
import Css from "@images/Skills/CSS.png";
import Javascript from "@images/Skills/Javascript.png";
import TypeScript from "@images/Skills/Typescript.png";
import Bootstrap from "@images/Skills/Bootstrap.png";
import ChakraUi from "@images/Skills/ChakraUI.png";
import Tailwind from "@images/Skills/Tailwind.png";
import Reacts from "@images/Skills/React.png";
import Nexts from "@images/Skills/Next.png";
import SQL from "@images/Skills/Mysql.png";
import Express from "@images/Skills/Express.png";
import Node from "@images/Skills/Node.png";
import Redux from "@images/Skills/Redux.png";

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  const headingControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start({ opacity: 1, scale: 1 });
      headingControl.start({ opacity: 1, y: 0 });
    }
  }, [isInView]);

  const skillDelay = 0.2;
  return (
    <motion.section
      ref={ref}
      className="snap-start bg-background h-full w-full flex justify-center md:pt-[50px] lg:pt-[90px] px-2 lg:px-[10em]"
    >
      <div className="w-full h-full">
        <div className="w-fit h-fit mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={headingControl}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
            className="text-3xl md:text-6xl font-semibold"
          >
            My Skills
          </motion.h2>
          <div className="w-full h-[4px] bg-text2 mt-2"></div>
        </div>
        <div>
          <motion.div className="w-full h-fit flex justify-center flex-wrap gap-x-14 md:px-5">
            <AnimatePresence>
              <motion.div
                className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={mainControl}
                transition={{ delay: 0 * skillDelay }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Image
                  src={Html}
                  alt={"Html Logo"}
                  className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-contain"
                />
                <p className="w-fit mx-auto lg:mt-5 mt-2">HTML</p>
              </motion.div>

              <motion.div
                className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={mainControl}
                transition={{ delay: 1 * skillDelay }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Image
                  src={Css}
                  alt={"Css Logo"}
                  className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-containr"
                />
                <p className="w-fit mx-auto lg:mt-5 mt-2">CSS</p>
              </motion.div>

              <motion.div
                className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={mainControl}
                transition={{ delay: 2 * skillDelay }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Image
                  src={Javascript}
                  alt={"Javascript Logo"}
                  className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-contain"
                />
                <p className="w-fit mx-auto lg:mt-5 mt-2">JavaScript</p>
              </motion.div>

              <motion.div
                className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={mainControl}
                transition={{ delay: 3 * skillDelay }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Image
                  src={TypeScript}
                  alt={"TypeScript Logo"}
                  className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-contain"
                />
                <p className="w-fit mx-auto lg:mt-5 mt-2">TypeScript</p>
              </motion.div>

              <motion.div
                className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={mainControl}
                transition={{ delay: 4 * skillDelay }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Image
                  src={Bootstrap}
                  alt={"Bootstrap Logo"}
                  className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-contain"
                />
                <p className="w-fit mx-auto lg:mt-5 mt-2">Bootstrap</p>
              </motion.div>

              <motion.div
                className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={mainControl}
                transition={{ delay: 5 * skillDelay }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Image
                  src={ChakraUi}
                  alt={"Chakra UI Logo"}
                  className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-contain"
                />
                <p className="w-fit mx-auto lg:mt-5 mt-2">Chakra UI</p>
              </motion.div>

              <motion.div
                className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={mainControl}
                transition={{ delay: 6 * skillDelay }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Image
                  src={Tailwind}
                  alt={"Tailwind CSS Logo"}
                  className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-contain"
                />
                <p className="w-fit mx-auto lg:mt-5 mt-2">Tailwind CSS</p>
              </motion.div>

              <motion.div
                className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={mainControl}
                transition={{ delay: 7 * skillDelay }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Image
                  src={Reacts}
                  alt={"React Logo"}
                  className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-contain"
                />
                <p className="w-fit mx-auto lg:mt-5 mt-2">React</p>
              </motion.div>

              <motion.div
                className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={mainControl}
                transition={{ delay: 8 * skillDelay }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Image
                  src={Nexts}
                  alt={"Next.js Logo"}
                  className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-contain"
                />
                <p className="w-fit mx-auto lg:mt-5 mt-2">Next.js</p>
              </motion.div>

              <motion.div
                className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={mainControl}
                transition={{ delay: 9 * skillDelay }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Image
                  src={SQL}
                  alt={"MySQL Logo"}
                  className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-contain"
                />
                <p className="w-fit mx-auto lg:mt-5 mt-2">MySQL</p>
              </motion.div>

              <motion.div
                className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={mainControl}
                transition={{ delay: 10 * skillDelay }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Image
                  src={Express}
                  alt={"Express.js Logo"}
                  className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-contain"
                />
                <p className="w-fit mx-auto lg:mt-5 mt-2">Express.js</p>
              </motion.div>

              <motion.div
                className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={mainControl}
                transition={{ delay: 11 * skillDelay }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Image
                  src={Node}
                  alt={"Node.js Logo"}
                  className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-contain"
                />
                <p className="w-fit mx-auto lg:mt-5 mt-2">Node.js</p>
              </motion.div>

              <motion.div
                className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-accent rounded-xl shadow-lg mb-8 col-span-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={mainControl}
                transition={{ delay: 12 * skillDelay }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Image
                  src={Redux}
                  alt={"Redux Logo"}
                  className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-6 lg:mt-8 object-contain"
                />
                <p className="w-fit mx-auto lg:mt-5 mt-2">Redux</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Section2;
