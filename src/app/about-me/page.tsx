import React from "react";
import type { Metadata } from "next";

import About from "./About";

export const metadata: Metadata = {
  title: "Ethaniel | About",
  description: "About Me Page",
  icons: {
    icon: "/favicon.ico",
  },
};

const AboutMe = () => {
  return (
    <>
      <About />
    </>
  );
};

export default AboutMe;
