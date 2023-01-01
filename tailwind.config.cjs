/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode:"class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors:{
				accent:"#f6f6f6",
				darker:"#efefef",
				darkcent:"#1c2027",
				darkerdark:"#0f1115"
			}
		},
	},
	plugins: [],
};
