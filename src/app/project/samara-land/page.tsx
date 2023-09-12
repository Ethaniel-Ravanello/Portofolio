import React from "react";
import type { Metadata } from "next";

import SamaraLand from "./SamaraLand";

export const metadata: Metadata = {
  title: "Samara Land | Project",
  description: "Samara Land",
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return <SamaraLand />;
};

export default Page;
