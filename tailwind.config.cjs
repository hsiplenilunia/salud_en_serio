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
				'navy': "#3422A0",
				'light-gray':"#F2F2F2",
				'black-text': "#000000",
				'bg-gray': "#e9e9e9",
				'gray-button': "#D6D5D5",
				'gray-card': "#D9D9D9",
				'back-gray': "#BABABA",
				'gradient-start': "#334757",
				'gradient-center': "#00b0e3",
				'gradient-end': "#62ac58",

				
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
