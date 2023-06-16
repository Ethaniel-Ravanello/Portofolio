import type { Metadata } from "next";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

export const metadata: Metadata = {
  title: "EthanielR",
  description: "My Personal Portofolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main className="h-max w-full bg-background text-text">
      <Section1 />
      <Section2 />
      <section id="project">
        <Section3 />
      </section>
    </main>
  );
}
