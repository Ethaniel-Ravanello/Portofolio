/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import pict from "../public/pict.jpg";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

type Props = {};

export default function About({}: Props) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<div className="max-w-7xl px-[20px] mx-auto">
			<motion.p
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				className="text-white text-center mb-10 text-4xl font-poppins"
			>
				A B O U T
			</motion.p>
			<motion.div
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
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
