import Head from "next/head";
import Header from "components/Header";
import Hero from "components/Hero";
import About from "components/About";
import Skills from "components/Skills";
import Project from "components/Project";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Ethaniel Portofolio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<section id="header" className="overflow-x-hidden snap-start ">
				<Header />
			</section>
			<section id="hero" className="snap-center">
				<Hero />
			</section>
			<section id="about" className="snap-center mt-[400px]">
				<About />
			</section>
			<section id="skills" className="snap-center mt-[400px]">
				<Skills />
			</section>
			<section id="project" className="snap-center">
				<Project />
			</section>
		</>
	);
}
