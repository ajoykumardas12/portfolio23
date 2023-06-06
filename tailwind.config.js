/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				brand: "#9282FF",
				highlight: "#01C8EF",
				darkest: "#0A192F",
				dark: "#164E63",
				mid: "#AAB4C6",
				light: "#D1D8E4",
				lightest: "#FFFFFF",
			},
			screens: {
				xs: "480px",
			},
		},
	},
	plugins: [],
};
