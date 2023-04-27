const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'apex-green': '#00F3B3',
				'apex-purple': '#9261f8',
			},
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
			'soulmaze': ['MADE-Soulmaze'],
			'soulmaze-outline': ['MADE-Soulmaze-Outline']
		}
	},

	plugins: []
};

module.exports = config;
