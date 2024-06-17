/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'metal-start': '#a7afaf', // Color inicial del gradiente
        'metal-end': '#f2f2f2'   // Color final del gradiente
      },
      backgroundImage: {
        'metal-gradient': 'linear-gradient(355deg, var(--tw-gradient-stops))',
      },
    },
	},
	plugins: [],
}
