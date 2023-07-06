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
				primarydark: '#4B9500',
				secondarydark: '#264C00',
				backgrounddark: '#142800',
				outlinedark: '#6E6E6E'
			}
		}
	},
	plugins: []
};
