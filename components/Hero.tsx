/* eslint-disable react/no-unescaped-entities */
import React from "react";
import hero from "../public/ryan.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
	return (
		<div className="max-w-7xl mx-auto mt-[100px] md:mt-[200px] max-h-7xl align-middle flex items-center justify-center">
			<div className="grid md:grid-cols-2 place-items-center gap-20">
				<motion.div
					initial={{
						y: -500,
						opacity: 0.5,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1,
					}}
					className="w-[250px] h-[250px] mx-auto md:mx-0 sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-2xl border-primary-300 bg-primary-300 border-[20px] border-solid"
				>
					<Image src={hero} alt="Profile Picture" />
				</motion.div>
				<motion.div
					className="sm:text-center md:text-start"
					initial={{
						y: 500,
						opacity: 0.5,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1,
					}}
				>
					<p className="font-poppins text-xl mx-auto sm:text-center md:text-start md:text-2xl text-gray-500 my-5">
						Web Developer - Front End Engineer
					</p>
					<p className="font-poppins uppercase text-2xl md:text-3xl lg:text-7xl mx-auto text-center md:text-start my-5 text-primary-600">
						Ethaniel Ravanello
					</p>
					<div className="gap-8 text-center md:text-start">
						<Link
							className="text-primary-500 uppercase font-poppins text-xl mr-5"
							href="#about"
						>
							About
						</Link>
						<Link
							className="text-primary-500 uppercase font-poppins text-xl mr-5"
							href="#skills"
						>
							Skills
						</Link>
						<Link
							className="text-primary-500 uppercase font-poppins text-xl"
							href="#project"
						>
							Project
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
