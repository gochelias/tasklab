module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'../../packages/ui/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				slate: {
					50: '#F7FAFC',
					100: '#EDF2F7',
					200: '#E2E8F0',
					300: '#CBD5E0',
					400: '#A0AEC0',
					500: '#718096',
					600: '#4A5568',
					700: '#2D3748',
					800: '#1A202C',
					900: '#171923',
					dark: '#0C111C',
				},
				transparent: 'transparent',
				current: 'currentColor',
				black: '#1A1C1E',
				white: '#FFFFFF',
				100: {
					light: '#878C98',
					dark: '#9DA4B3',
				},
				200: {
					light: '#B6BFCE',
					dark: '#6D757C',
				},
				300: {
					light: '#f1f3f7',
					dark: '#2E3235',
				},
				400: {
					light: '#F5F7F9',
					dark: '#282A2E',
				},
				red: {
					light: '#FF3B30',
					dark: '#FF453A',
				},
				orange: {
					light: '#FF9500',
					dark: '#FF9F0A',
				},
				green: {
					light: '#34C759',
					dark: '#30D158',
				},
				cyan: {
					light: '#32ADE6',
					dark: '#64D2FF',
				},
				blue: {
					dark: '#0A84FF',
					light: '#007AFF',
					10: 'rgb(0,122,255,0.1)',
					20: 'rgb(10,132,255,0.2)',
				},
			},
		},
	},
	plugins: [],
};
