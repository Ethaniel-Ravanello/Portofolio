import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import html from "../public/html.svg";
import css from "../public/css.svg";
import js from "../public/Java.svg";
import react from "../public/REACT.svg";
import next from "../public/next.svg";
import tail from "../public/tailwind.svg";
import boot from "../public/Bootstrap.svg";
import chakra from "../public/CHAKRA.svg";

type Props = {};

export default function Skills({}: Props) {
	return (
		<div className="max-w-7xl mx-auto">
			<h3 className="text-white text-4xl mb-10 text-center">S K I L L S</h3>
			<div className="grid md:grid-cols-4 mx-auto gap-y-24">
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-orange-600/100 w-[180px] h-[180px] rounded-lg mx-auto">
					<Image src={html} className="text-center items-center mx-auto mt-5" />
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-blue-600/100 w-[180px] h-[180px]rounded-lg mx-auto">
					<Image src={css} className="text-center items-center mx-auto mt-5" />
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-yellow-600/100 w-[180px] h-[180px] rounded-lg mx-auto">
					<Image src={js} className="text-center items-center mx-auto mt-5" />
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-blue-300/100 w-[180px] h-[180px] rounded-lg mx-auto">
					<Image
						src={react}
						className="text-center items-center mx-auto mt-5"
					/>
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-white/100 w-[180px] h-[180px] rounded-lg mx-auto">
					<Image
						src={next}
						width={144}
						className="text-center items-center mx-auto mt-5"
					/>
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-blue-200/100 w-[180px] h-[180px] rounded-lg mx-auto">
					<Image src={tail} className="text-center items-center mx-auto" />
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-purple-700/100 w-[180px] h-[180px] rounded-lg mx-auto">
					<Image
						src={boot}
						width={140}
						className="text-center items-center mx-auto mt-5"
					/>
				</div>
				<div className="bg-primary-400 shadow-xl items-center text-center shadow-white/100 w-[180px] h-[180px] rounded-lg mx-auto">
					<Image
						src={chakra}
						width={140}
						className="text-center items-center mx-auto mt-5"
					/>
				</div>
			</div>
		</div>
	);
}
