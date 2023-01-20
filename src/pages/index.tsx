import Head from "next/head";
import Header from "components/Header";
import Hero from "components/Hero";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Ethaniel Portofolio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Header />
			<Hero />
		</>
	);
}
