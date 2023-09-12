import React from "react";
import type { Metadata } from "next";

import DashboardAlta from "./DashboardAlta";

export const metadata: Metadata = {
  title: "Dashboard Alta | Project",
  description: "Dashboard Alta",
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <>
      <DashboardAlta />
    </>
  );
};

export default Page;
