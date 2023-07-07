/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', './static/**/*'],
	theme: {
		extend: {
			colors: {
				primarylight: '#B3EF76',
				secondarylight: '#DBFFB6',
				backgroundlight: '#F8FFEF',
				outlinelight: '#000000',
				primarydark: '#397200',
				secondarydark: '#244800',
				backgrounddark: '#27301E',
				outlinedark: '#000000'
			}
		}
	},
	plugins: []
};
