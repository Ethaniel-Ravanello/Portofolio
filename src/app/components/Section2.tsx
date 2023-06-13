import React from "react";
import Image from "next/image";

import Html from "@images/Html.png";
import Css from "@images/CSS.png";
import Javascript from "@images/Javascript.png";
import TypeScript from "@images/Typescript.png";
import Reacts from "@images/React.png";
import Nexts from "@images/Next.png";

const Section2 = () => {
  return (
    <div className="snap-start bg-background h-screen w-full flex justify-center pt-[130px] px-24">
      <div className="w-full h-fit">
        <div className="w-fit h-fit mx-auto mb-10">
          <h2 className="text-6xl font-extrabold">My Skills</h2>
          <div className="w-full h-[4px] bg-text2 mt-2"></div>
        </div>
        <div>
          <div className="w-full h-fit flex flex-wrap justify-between">
            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-5">
              <Image
                src={Html}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-contain"
              />

              <p className="w-fit mx-auto mt-5">HTML</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-5">
              <Image
                src={Css}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">CSS</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-5">
              <Image
                src={Javascript}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">Javascript</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-5">
              <Image
                src={TypeScript}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">TypeScript</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-5">
              <Image
                src={Reacts}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">React</p>
            </div>

            <div className="w-[200px] h-[200px] bg-accent rounded-xl shadow-lg mb-5">
              <Image
                src={Nexts}
                alt={"Html Logo"}
                className="w-[130px] h-[130px] mx-auto mt-2 object-containr"
              />
              <p className="w-fit mx-auto mt-5">Next</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
