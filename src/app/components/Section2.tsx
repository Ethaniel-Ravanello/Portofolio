import React from "react";
import Image from "next/image";

import Html from "@images/Html.png";
import Css from "@images/CSS.png";
import Javascript from "@images/Javascript.png";
import TypeScript from "@images/Typescript.png";
import Bootstrap from "@images/Bootstrap.png";
import ChakraUi from "@images/ChakraUI.png";
import Tailwind from "@images/Tailwind.png";
import Reacts from "@images/React.png";
import Nexts from "@images/Next.png";
import SQL from "@images/Mysql.png";
import Express from "@images/Express.png";
import Node from "@images/Node.png";
import Redux from "@images/Redux.png";

const Section2 = () => {
  return (
    <section className="snap-start bg-background h-screen w-full flex justify-center pt-[130px] px-28">
      <div className="w-full h-fit">
        <div className="w-fit h-fit mx-auto mb-10">
          <h2 className="text-6xl font-extrabold">My Skills</h2>
          <div className="w-full h-[4px] bg-text2 mt-2"></div>
        </div>
        <div>
          <div className="w-full h-fit flex justify-center flex-wrap gap-x-14">
            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Html}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-contain"
              />

              <p className="w-fit mx-auto mt-5">HTML</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Css}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">CSS</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Javascript}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">Javascript</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={TypeScript}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">TypeScript</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Bootstrap}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">Bootstrap</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={ChakraUi}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">ChakraUI</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Tailwind}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">Tailwinds CSS</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Reacts}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">React</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-8">
              <Image
                src={Redux}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-contain"
              />
              <p className="w-fit mx-auto mt-5">Redux</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-8 col-span-1">
              <Image
                src={Nexts}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">Next</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-8 col-span-2">
              <Image
                src={SQL}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">MySql</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-8 col-span-1">
              <Image
                src={Express}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">ExpressJS</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-8 col-span-2">
              <Image
                src={Node}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">NodeJs</p>
            </div>
          </div>
          {""}
        </div>
      </div>
    </section>
  );
};

export default Section2;
