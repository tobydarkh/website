/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	daisyui: {
		themes: [
			{
				mytheme: {

					"primary": "#b900ff",

					"primary-content": "#f2daff",

					"secondary": "#0088ff",

					"secondary-content": "#000616",

					"accent": "#00beff",

					"accent-content": "#000d16",

					"neutral": "#2c301f",

					"neutral-content": "#d0d1cd",

					"base-100": "#1b222b",

					"base-200": "#161c24",

					"base-300": "#11161d",

					"base-content": "#ccced0",

					"info": "#0097f1",

					"info-content": "#000814",

					"success": "#44b300",

					"success-content": "#020c00",

					"warning": "#ffb24e",

					"warning-content": "#160c02",

					"error": "#b91a43",

					"error-content": "#f7d5d7",
				},
			},
		],
	},

	theme: {
		extend: {},
	},
	plugins: [
		require('flowbite/plugin'),
		require('daisyui')
	],
}
