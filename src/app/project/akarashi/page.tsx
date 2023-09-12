import React from "react";
import type { Metadata } from "next";

import Akarashi from "./Akrashi";

export const metadata: Metadata = {
  title: "Akarashi | Project",
  description: "Akarashi Game Database",
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <>
      <Akarashi />
    </>
  );
};

export default Page;
