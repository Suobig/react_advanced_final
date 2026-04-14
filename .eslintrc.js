module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				paths: ['src'],
			},
		},
		'boundaries/elements': [
			{ type: 'shared', pattern: 'src/6-shared/*' },
			{ type: 'entities', pattern: 'src/5-entities/*' },
			{ type: 'features', pattern: 'src/4-features/*' },
			{ type: 'widgets', pattern: 'src/3-widgets/*' },
			{ type: 'pages', pattern: 'src/2-pages/*' },
			{ type: 'app', pattern: 'src/1-app/*' },
		],
	},
	plugins: ['react', 'import', 'jsx-a11y', 'react-hooks', 'boundaries'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:eslint-comments/recommended',
	],
	rules: {
		semi: [2, 'always'],
		quotes: [2, 'single', { avoidEscape: true }],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/no-var-requires': 'off',
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
};
