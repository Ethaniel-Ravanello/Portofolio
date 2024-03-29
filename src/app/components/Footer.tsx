import React from "react";
import Link from "next/link";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className={`w-full mx-auto h-fit bg-transparent lg:bg-background py-5 lg:px-32 flex justify-center gap-x-11`}
    >
      <Link
        href="https://www.linkedin.com/in/ethaniel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="text-white w-7 h-7" />
      </Link>
      <Link
        href="https://github.com/Ethaniel-Ravanello"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-white w-7 h-7" />
      </Link>
    </div>
  );
};

export default Footer;
