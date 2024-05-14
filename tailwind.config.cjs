/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				oswald: ["Oswald"],
				futura: ["Futura"],
				gotham: ["Gotham"],
			},
			animation: {
				scale: 'scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1)',
				'staggered': 'fade-in 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0)',
				'fade-in-text': 'fade 2s linear',
			},
			keyframes: ({
				fade: {
					'0%': { color: 'rgba(255,255,255,0)' },
					'50%': { color: 'rgba(255,255,255,0.5)' },
					'100%': { color: 'rgba(255,255,255,1)' },
				},
				scale: {
					'100%': {
					  transform: 'scale(1)',
					},
				},
				'fade-in': {
					'100%': {
						opacity: '1',
						filter: 'blur(0)',
					}
				}
			})
		},
	},
	plugins: [
		({ addUtilities }) => {
			const MAX_NUM_CHILDREN = 10;
	  
			const utilities = {
			  '.staggered-text': {
				'transform': 'scale(0.94)',
				'@apply animate-scale': {},
			  },
			  '.staggered-text > *': {
				  'display': 'inline-block',
				  'opacity': '0',
				  'filter': 'blur(4px)',
				  '@apply animate-staggered': {},
			  },
			};
	  
			for (let i = 1; i < MAX_NUM_CHILDREN; i++) {
			  utilities[`.staggered-text > *:nth-child(${i})`] = {
				'animation-delay': `${i * 0.5}s`,
			  };
			}
	  
			addUtilities(utilities);
		},
		require('@tailwindcss/typography')
	],
}
