/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import pict from "../public/pict.jpg";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
	return (
		<div className="max-w-7xl  mx-auto">
			<motion.p
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				className="text-white text-center mb-10 text-4xl font-poppins"
			>
				A B O U T
			</motion.p>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				className="grid md:grid-cols-2 place-items-center gap-20"
			>
				<p className="text-primary-600 text-center md:text-start font-poppins leading-10 mt-5">
					Hello my name is Ethaniel Ravanello, I'm a front-end engineer who just
					graduated from Alterra academy Bootcamp. I did several projects while
					in the bootcamp using Javascript as my main programming language and
					Framework/Library such as ReactJS, NextJS, Tailwinds, Bootstrap and
					ChakraUI. And I'm currently learning other frameworks and languages
					such as Typescript and Astro.
				</p>
				<Image src={pict} alt="Picture" className="hidden md:inline-flex" />
			</motion.div>
		</div>
	);
}
