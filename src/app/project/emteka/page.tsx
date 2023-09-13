import React from "react";
import type { Metadata } from "next";

import Emteka from "./Emteka";

export const metadata: Metadata = {
  title: "Emteka | Project",
  description: "Emteka",
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <>
      <Emteka />
    </>
  );
};

export default Page;
