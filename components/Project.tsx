import React from "react";
import dash from "../public/dash.jpg";
import travel from "../public/travel.jpg";
import ikuz from "../public/ikuz.jpg";
import movies from "../public/movies.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

type Props = {};

export default function Project({}: Props) {
	const slides = [
		{
			url: { dash },
			case: "Case Study 1 Out Of 4",
			header: "Admin Dashboard",
		},
		{
			url: { travel },
			case: "Case Study 2 Out Of 4",
			header: "Hyrule Travel",
		},
		{
			url: { ikuz },
			case: "Case Study 2 Out Of 4",
			header: "Ikuzports",
		},
		{
			url: { travel },
			case: "Case Study 2 Out Of 4",
			header: "Zora Watch",
		},
	];
	return (
		<div className="max-w-7xl h-[700px] mx-auto py-16 px-4 relative mb-[100px]">
			<div
				style={{ backgroundImage: `url(${slides[0].url})` }}
				className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
			></div>
		</div>
	);
}
