/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				oswald: ["Oswald"]
			},

			keyframes: ({
				fade: {
					'0%': { color: 'rgba(255,255,255,0)' },
					'50%': { color: 'rgba(255,255,255,0.5)' },
					'100%': { color: 'rgba(255,255,255,1)' },
				},
			}),


			animation: {
				'fade-in-text': 'fade 3s linear',
			},
			  
		},
	},
	plugins: [],
}
