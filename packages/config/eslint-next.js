module.exports = {
	extends: ['next', 'airbnb-base', 'prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'react/jsx-key': 'off',
		'no-unused-vars': 'off',
		'import/prefer-default-export': 'off',
		'import/extensions': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
	},
};
