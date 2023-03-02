module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		node: true,
		es2021: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	plugins: ['@typescript-eslint', 'hexagonal-architecture'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'@vue/typescript/recommended',
		'eslint-config-custom',
	],
	settings: {
		'import/resolver': {
			typescript: {},
			node: {
				extensions: ['.js', '.ts', '.vue'],
			},
		},
	},
	overrides: [
		{
			files: ['src/**/*.ts'],
			rules: {
				'@typescript-eslint/consistent-type-imports': 1,
			},
		},
	],
}
