import type { Metadata } from "next";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

export const metadata: Metadata = {
  title: "Ethaniel",
  description: "My Personal Portofolio",
};

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-auto h-screen w-full bg-background">
      <Section1 />
      <Section2 />
    </main>
  );
}
