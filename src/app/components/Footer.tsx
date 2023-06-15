import React from "react";
import Link from "next/link";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-background py-5 px-32">
      <Link
        href="https://www.linkedin.com/in/ethaniel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="text-white w-7 h-7" />
      </Link>
    </div>
  );
};

export default Footer;
