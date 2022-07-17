/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gray-dark': '#282625',
				'gray-light': '#363332',
				'gray-card': '#33312F',
				'gray-link': '#A3A3A3',
				'warm-orange': '#E16428',
				'off-white': '#EEEEEE'
			},
			fontFamily: {
				'custom-sans': ['Lato', 'Arial', 'sans-serif'],
				'custom-mono': ['DM Mono', 'Courier New', 'monospace']
			}
		},
	},
	plugins: [
		require('@tailwindcss/line-clamp')
	],
}
