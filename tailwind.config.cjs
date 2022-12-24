/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors:{
				accent:"#f6f6f6",
				darker:"#efefef",
			}
		},
	},
	plugins: [],
};
