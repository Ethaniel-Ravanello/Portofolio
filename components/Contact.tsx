import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { SocialIcon } from "react-social-icons";
import { useInView } from "framer-motion";
import { AiOutlineMail, AiFillFile } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsHeadphones } from "react-icons/bs";

type Props = {};

export default function Contact({}: Props) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<div className="max-w-7xl h-[600px] mx-auto mb-[100px]">
			<motion.h3
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				transition={{
					duration: isInView ? 1 : 0,
				}}
				className="text-white text-5xl mb-10 font-poppins text-center"
			>
				Get To Know Me
			</motion.h3>
			<div>
				<div className="w-full flex justify-between">
					<div className="border-2 border-2-white w-[350px] h-[140px] rounded-xl text-center">
						<AiOutlineMail
							size={35}
							className="text-white text-center mx-auto mt-4 mb-5"
						/>
						<p className="text-white font-poppins align-middle">
							ravaneloe@gmail.com
						</p>
					</div>
					<div className="border-2 border-2-white w-[350px] h-[140px] rounded-xl text-center">
						<FaMapMarkerAlt
							size={35}
							className="text-white text-center mx-auto mt-4 mb-2"
						/>
						<p className="text-white font-poppins align-middle">
							Jalan Galunggung Blok A 10 NO.16 Tangerang Selatan, Banten
						</p>
					</div>
					<div className="border-2 border-2-white w-[350px] h-[140px] rounded-xl text-center">
						<BsHeadphones
							size={35}
							className="text-white text-center mx-auto mt-4 mb-5"
						/>
						<p className="text-white font-poppins align-middle">
							0818 - 0869 - 0476
						</p>
					</div>
				</div>
				<div className="text-center justify-center mt-10 gap-10 flex">
					<div className="w-[150px] h-[80px] border-2 border-2-white rounded-lg">
						<SocialIcon
							url="https://github.com/Ethaniel-Ravanello"
							fgColor="white"
							bgColor="transparent"
						/>
						<p className="text-white font-poppins font-semibold">GitHub</p>
					</div>
					<div className="w-[150px] h-[80px] border-2 border-2-white rounded-lg">
						<SocialIcon
							url="https://www.linkedin.com/in/ethaniel-ravanello-a60810251/"
							fgColor="white"
							bgColor="transparent"
						/>
						<p className="text-white font-poppins font-semibold">LinkedIn</p>
					</div>
					<a href="/Ethaniel_Resume.pdf" download={"Resume"}>
						<div className="w-[150px] h-[80px] border-2 border-2-white rounded-lg">
							<AiFillFile size={23} className="text-white mx-auto mt-4" />
							<p className="text-white font-poppins font-semibold mt-[11px]">
								Resume
							</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
