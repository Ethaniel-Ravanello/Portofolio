import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import html from "../public/html.svg";
import css from "../public/css.svg";
import js from "../public/Java.svg";
import react from "../public/REACT.svg";
import next from "../public/next.svg";
import tail from "../public/tailwind.svg";
import boot from "../public/Bootstrap.svg";
import chakra from "../public/CHAKRA.svg";
import sass from "../public/SASS.svg";

type Props = {};

export default function Skills({}: Props) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<motion.div
			ref={ref}
			style={{
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
			transition={{
				duration: isInView ? 1 : 0,
			}}
			className="max-w-7xl mx-auto mb-[100px]"
		>
			<h3 className="text-white text-4xl mb-10 text-center">S K I L L S</h3>
			<div className="grid grid-cols-2 md:grid-cols-4 mx-auto gap-y-24">
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-orange-600/100 w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-lg mx-auto">
					<Image
						src={html}
						alt="Skills"
						className="text-center items-center mx-auto md:mt-5"
					/>
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-blue-600/100 w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-lg mx-auto">
					<Image
						src={css}
						alt="Skills"
						className="text-center items-center mx-auto md:mt-5"
					/>
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-yellow-600/100 w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-lg mx-auto">
					<Image
						src={js}
						alt="Skills"
						className="text-center items-center mx-auto md:mt-5"
					/>
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-blue-300/100 w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-lg mx-auto">
					<Image
						src={react}
						className="text-center items-center mx-auto md:mt-5"
						alt="Skills"
					/>
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-white/100 w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-lg mx-auto">
					<Image
						src={next}
						className="text-center items-center mx-auto"
						alt="Skills"
					/>
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-blue-200/100 w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-lg mx-auto">
					<Image
						src={tail}
						alt="Skills"
						className="text-center items-center mx-auto"
					/>
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-purple-700/100 w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-lg mx-auto">
					<Image
						src={boot}
						className="text-center items-center mx-auto "
						alt="Skills"
					/>
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-white/100 w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-lg mx-auto">
					<Image
						src={chakra}
						className="text-center items-center mx-auto "
						alt="Skills"
					/>
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-pink-600/100 w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-lg mx-auto">
					<Image
						src={sass}
						className="text-center items-center mx-auto "
						alt="Skills"
					/>
				</div>
			</div>
		</motion.div>
	);
}
