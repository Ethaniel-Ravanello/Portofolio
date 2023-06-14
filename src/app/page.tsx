import type { Metadata } from "next";
import Head from "next/head";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

export const metadata: Metadata = {
  title: "EthanielR",
  description: "My Personal Portofolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-auto h-screen w-full bg-background text-text container-snap">
      <Section1 />
      <Section2 />
    </main>
  );
}
