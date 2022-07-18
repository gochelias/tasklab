module.exports = {
	env: {
		node: true,
		jest: true,
		es2022: true,
	},
	extends: ['airbnb-base', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		proyect: ['./tsconfig.json'],
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'warn',
		'arrow-spacing': [
			'warn',
			{
				before: true,
				after: true,
			},
		],
		'brace-style': [2],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'comma-style': 'error',
		curly: ['error', 'multi-line', 'consistent'],
		'dot-location': ['error', 'property'],
		'handle-callback-err': 'off',
		indent: [2, 'tab'],
		'keyword-spacing': 'error',
		'max-nested-callbacks': [
			'error',
			{
				max: 4,
			},
		],
		'max-statements-per-line': [
			'error',
			{
				max: 2,
			},
		],
		'no-console': 'off',
		'no-empty-function': 'off',
		'no-floating-decimal': 'error',
		'no-inline-comments': 'error',
		'no-lonely-if': 'error',
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 2,
				maxEOF: 1,
				maxBOF: 0,
			},
		],
		'no-trailing-spaces': ['error'],
		'no-var': 'error',
		'object-curly-spacing': ['error', 'always'],
		'prefer-const': 'error',
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		yoda: 'error',
		'no-restricted-syntax': 'off',
		'import/no-dynamic-require': 'off',
		'global-require': 'off',
		'import/prefer-default-export': 'off',
		'@typescript-eslint/no-unused-expressions': 'off',
		'no-unused-expressions': 'off',
		'class-methods-use-this': 'off',
		'new-cap': 'off',
		'no-underscore-dangle': 'off',
		'import/no-cycle': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'no-param-reassign': 'off',
		'no-useless-return': 'off',
	},
};