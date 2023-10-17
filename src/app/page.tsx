import type { Metadata } from "next";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "EthanielR",
  description: "My Personal Portofolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main className="w-full bg-background text-text">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </main>
  );
}
