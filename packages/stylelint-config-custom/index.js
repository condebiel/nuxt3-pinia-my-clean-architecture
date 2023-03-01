module.exports = {
	overrides: [
		{
			files: ['**/*.scss'],
			customSyntax: 'postcss-scss',
		},
	],
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-prettier',
		'stylelint-config-concentric-order',
	],
	rules: {
		'selector-class-pattern': null,
		'no-descending-specificity': null,
		'selector-pseudo-class-no-unknown': null,
		'scss/at-extend-no-missing-placeholder': null,
		'function-url-quotes': null,
		'scss/no-global-function-names': null,
		'scss/at-function-pattern': null,
		'order/order': [
			'custom-properties',
			'dollar-variables',
			{
				type: 'at-rule',
				name: 'extend',
			},
			{
				type: 'at-rule',
				name: 'include',
				hasBlock: false,
			},
			{
				type: 'at-rule',
				name: 'mixin',
				hasBlock: false,
			},
			'declarations',
			{
				type: 'at-rule',
				name: 'include',
				hasBlock: true,
			},
			{
				type: 'at-rule',
				name: 'mixin',
				hasBlock: true,
			},
			'rules',
		],
	},
}
