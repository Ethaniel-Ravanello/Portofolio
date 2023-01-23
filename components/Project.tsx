import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
type Props = {};

export default function Project({}: Props) {
	const slides = [
		{
			url: "/dash.jpg",
			case: "Case Study 1 Out Of 4",
			header: "Admin Dashboard",
			id: 1,
			desc: "Dashboard Alta is an application to assist the Alta team in managing mentees, mentors, andclasses which becomes one application portal. This project contains consume API using Axios library, Dashboard using React.js, styling using DaisyUI and TailwindCSS, and was deployed in Netifly.",
		},
		{
			url: "/travel.jpg",
			case: "Case Study 2 Out Of 4",
			header: "Hyrule Travel",
			id: 2,
			desc: "The features that I cloned from Airbnb were to book the place, list places, and be a host whereyou can rent your property. I worked on frontend end using React as the base of the project and Tailwind CSS as the framework for the CSS, and Node.js. Also deployed using Vercel.",
		},
		{
			url: "ikuz.jpg",
			case: "Case Study 3 Out Of 4",
			header: "Ikuzports",
			id: 3,
			desc: "Ikuzports is a website for sport lover to find a new friend to play together, user there can find an event with their desire sport and you can join a club too to play together within the same area or same kind of sport.",
		},
		{
			url: "/movies.jpg",
			case: "Case Study 4 Out Of 4",
			header: "Zora Watch",
			id: 4,
			desc: "Zora Watch is an application for streaming movies and you can save your favorite movies to see later. This project contains consume API using Axios, Landing page using React, feature change mode(themes), feature save your favorite movies with Redux, styling using the framework DaisyUI and deployed in Vercel.",
		},
	];
	const [currentIndex, setCurrentIndex] = useState(0);
	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	const goToSlide = (slideIndex: any) => {
		setCurrentIndex(slideIndex);
	};

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<div className="max-w-7xl h-[700px] mx-auto py-16 px-4 relative mb-[100px] ">
			<motion.h3
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				className="text-white text-4xl mb-10 text-center"
			>
				P R O J E C T S
			</motion.h3>
			<motion.h3
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				initial={{
					x: isInView ? 500 : 0,
				}}
				animate={{
					x: isInView ? 0 : 500,
				}}
				className="text-white text-center justify-center text-3xl font-poppins my-4"
			>
				{slides[currentIndex].case}
			</motion.h3>
			<motion.h4
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				initial={{
					x: isInView ? -500 : 0,
				}}
				animate={{
					x: isInView ? 0 : -500,
				}}
				className="text-white text-center justify-center text-3xl font-poppins my-4"
			>
				{slides[currentIndex].header}
			</motion.h4>
			<motion.div
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					backgroundImage: `url(${slides[currentIndex].url})`,
				}}
				className="w-full h-[200px] sm:h-[400px] lg:h-full object-contain rounded-2xl bg-center bg-cover duration-500"
			></motion.div>
			<motion.div
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				className="absolute top-[50%] sm:top-[65%] lg:top-[80%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
			>
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</motion.div>
			<motion.div
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				className="absolute top-[50%] sm:top-[65%] lg:top-[80%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
			>
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</motion.div>
			<motion.div
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				className="flex top-4 justify-center py-2"
			>
				{slides.map((slides, slidesIndex) => (
					<div
						key={slidesIndex}
						onClick={() => goToSlide(slidesIndex)}
						className="text-2xl cursor-pointer text-white"
					>
						<RxDotFilled />
					</div>
				))}
			</motion.div>
			<motion.div
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
			>
				<p className="text-white text-center text-xl font-poppins mt-5">
					{slides[currentIndex].desc}
				</p>
			</motion.div>
		</div>
	);
}
