/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Mulish', 'sans-serif']
		}
		,
		extend: {
			colors: {
				purple: "#7758AC",
				'purple-text': "#7244B4",
				apple: "#CCF750",
				guacamole: "#C2D293",
				'guacamole-light': "#D9E4BB",
				'apple-dark':"#B7D280",
				'pink-fresh':"#F8C5FE",
				'black-text': "#231F20",
				capuchino: "#EBE5DD",
				'light-text': "#FAF9F9",

				'navy': "#144157",
				'light-gray':"#f2f2f2",
				'gray-hsi': "#808080",
				'bg-gray': "#e9e9e9",
				'hsi-blue': "#00ccf2",
				'celeste-hsi': "#00bbe7",
				'green-hsi': "#00B851",
				'gradient-start': "#334757",
				'gradient-center': "#00b0e3",
				'gradient-end': "#62ac58",
			}
		},
	},
	plugins: [],
}
