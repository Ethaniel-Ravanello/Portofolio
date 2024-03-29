import React from "react";
import type { Metadata } from "next";

import CrudMern from "./CrudMern";

export const metadata: Metadata = {
  title: "Crud MERN | Project",
  description: "Crud Mern",
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return <CrudMern />;
};

export default Page;
