import React from "react";
import type { Metadata } from "next";

import ZoraWatch from "./ZoraWatch";

export const metadata: Metadata = {
  title: "Zora Watch | Project",
  description: "Zora Watch",
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <>
      <ZoraWatch />
    </>
  );
};

export default Page;
