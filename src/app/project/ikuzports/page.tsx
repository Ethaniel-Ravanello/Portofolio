import React from "react";
import type { Metadata } from "next";

import Ikuzports from "./Ikuzports";

export const metadata: Metadata = {
  title: "Samara Land | Project",
  description: "Samara Land",
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <>
      <Ikuzports />
    </>
  );
};

export default Page;
