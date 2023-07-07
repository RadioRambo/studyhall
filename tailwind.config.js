/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primarylight: '#B3EF76',
				secondarylight: '#DBFFB6',
				backgroundlight: '#F1FEE2',
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
