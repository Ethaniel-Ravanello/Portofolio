import React from "react";
import type { Metadata } from "next";

import GreenParadise from "./GreenParadise";

export const metadata: Metadata = {
  title: "Green Paradise | Project",
  description: "Green Paradise",
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return <GreenParadise />;
};

export default Page;
