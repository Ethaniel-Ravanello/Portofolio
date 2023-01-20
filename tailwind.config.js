/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				primary: {
					100: "#121212",
					200: "#181818",
					300: "#404040",
					400: "#282828",
					500: "#FFFFFF",
					600: "#B3B3B3",
				},
			},
		},
	},
	plugins: [],
};
