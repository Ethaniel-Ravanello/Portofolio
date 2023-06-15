import React from "react";
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
  return (
    <section className="snap-start bg-background h-full xl:h-screen w-full flex justify-center md:pt-[50px] lg:pt-[100px] px-2 lg:px-28">
      <div className="w-full h-full">
        <div className="w-fit h-fit mx-auto mb-10">
          <h2 className="text-3xl md:text-6xl font-extrabold">My Skills</h2>
          <div className="w-full h-[4px] bg-text2 mt-2"></div>
        </div>
        <div>
          <div className="w-full h-fit flex justify-center flex-wrap gap-x-14 md:px-5">
            <div className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px]  bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Html}
                alt={"Html Logo"}
                className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-contain"
              />

              <p className="w-fit mx-auto lg:mt-5 mt-2">HTML</p>
            </div>

            <div className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px]  bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Css}
                alt={"Html Logo"}
                className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-containr"
              />
              <p className="w-fit mx-auto lg:mt-5 mt-2">CSS</p>
            </div>

            <div className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Javascript}
                alt={"Html Logo"}
                className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-containr"
              />
              <p className="w-fit mx-auto lg:mt-5 mt-2">Javascript</p>
            </div>

            <div className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={TypeScript}
                alt={"Html Logo"}
                className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-containr"
              />
              <p className="w-fit mx-auto lg:mt-5 mt-2">TypeScript</p>
            </div>

            <div className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Bootstrap}
                alt={"Html Logo"}
                className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-containr"
              />
              <p className="w-fit mx-auto lg:mt-5 mt-2">Bootstrap</p>
            </div>

            <div className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={ChakraUi}
                alt={"Html Logo"}
                className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-containr"
              />
              <p className="w-fit mx-auto lg:mt-5 mt-2">ChakraUI</p>
            </div>

            <div className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Tailwind}
                alt={"Html Logo"}
                className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-containr"
              />
              <p className="w-fit mx-auto lg:mt-5 mt-2">Tailwinds</p>
            </div>

            <div className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Reacts}
                alt={"Html Logo"}
                className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-containr"
              />
              <p className="w-fit mx-auto lg:mt-5 mt-2">React</p>
            </div>

            <div className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Redux}
                alt={"Html Logo"}
                className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-contain"
              />
              <p className="w-fit mx-auto lg:mt-5 mt-2">Redux</p>
            </div>

            <div className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-1">
              <Image
                src={Nexts}
                alt={"Html Logo"}
                className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-containr"
              />
              <p className="w-fit mx-auto lg:mt-5 mt-2">Next</p>
            </div>

            <div className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-2">
              <Image
                src={SQL}
                alt={"Html Logo"}
                className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-containr"
              />
              <p className="w-fit mx-auto lg:mt-5 mt-2">MySql</p>
            </div>

            <div className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-1">
              <Image
                src={Express}
                alt={"Html Logo"}
                className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-containr"
              />
              <p className="w-fit mx-auto lg:mt-5 mt-2">ExpressJS</p>
            </div>

            <div className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-accent rounded-xl shadow-lg mb-8 col-span-2">
              <Image
                src={Node}
                alt={"Html Logo"}
                className="lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] w-[50px] h-[50px] mx-auto mt-2 lg:mt-5 object-containr"
              />
              <p className="w-fit mx-auto lg:mt-5 mt-2">NodeJs</p>
            </div>
          </div>
          {""}
        </div>
      </div>
    </section>
  );
};

export default Section2;
