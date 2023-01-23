import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="sticky bg-primary-100 top-0 px-[30px] flex items-start justify-between max-w-7xl mx-auto z-100 xl:items-center">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1,
				}}
				className="flex flex-row items-center"
			>
				<SocialIcon
					url="https://github.com/Ethaniel-Ravanello"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.linkedin.com/in/ethaniel-ravanello-a60810251/"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>
			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1,
				}}
				className="flex flex-row items-center text-gray-300"
			>
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="gray"
					bgColor="transparent"
				/>
				<Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
					<p className="uppercase hidden md:inline-flex text-sm cursor-pointer text-gray-400 align-middle text-center">
						GET TO KNOW ME
					</p>
				</Link>
			</motion.div>
		</header>
	);
}
