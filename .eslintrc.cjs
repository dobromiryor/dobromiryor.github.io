/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	env: { browser: true, es2020: true, node: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		"react-refresh",
		"import",
		"react",
		"react-hooks",
		"@typescript-eslint",
		"prettier",
	],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		eqeqeq: ["error", "always", { null: "ignore" }],
		"template-curly-spacing": "error",
		"rest-spread-spacing": ["error", "never"],
		"no-debugger": "error",
		"prettier/prettier": [
			"error",
			{
				arrowParens: "always",
				bracketSameLine: false,
				bracketSpacing: true,
				endOfLine: "auto",
				printWidth: 80,
				semi: true,
				singleQuote: false,
				tabWidth: 2,
				trailingComma: "es5",
				useTabs: true,
			},
		],
		"no-console": ["error", { allow: ["info", "warn", "error"] }],
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				ignoreRestSiblings: true,
				varsIgnorePattern: "^_",
				argsIgnorePattern: "^_",
			},
		],
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "error",
		"import/no-duplicates": [
			"error",
			{
				"prefer-inline": true,
			},
		],
		"import/no-unresolved": "error",
		"import/no-named-as-default-member": "off",
		"import/first": "warn",
		"import/newline-after-import": ["warn", { count: 1 }],
		"import/prefer-default-export": "off",
		"import/group-exports": "off",
		"import/no-named-as-default": "off",
		"import/order": [
			"warn",
			{
				pathGroups: [
					{
						pattern: "react",
						group: "external",
						position: "after",
					},
					{
						pattern: "~",
						group: "internal",
						position: "before",
					},
				],
				"newlines-between": "always",
				groups: [
					"external",
					"unknown",
					"internal",
					["sibling", "parent"],
					"builtin",
					"index",
					"object",
					"type",
				],
			},
		],
		curly: "error",
		"padding-line-between-statements": [
			"error",
			{
				blankLine: "always",
				prev: [
					"block",
					"block-like",
					"class",
					"const",
					"continue",
					"debugger",
					"default",
					"do",
					"empty",
					"for",
					"function",
					"if",
					"iife",
					"import",
					"let",
					"return",
					"switch",
					"throw",
					"try",
					"var",
					"while",
					"with",
				],
				next: "*",
			},
			{
				blankLine: "any",
				prev: ["const", "let", "var", "import", "export"],
				next: ["const", "let", "var", "import", "export"],
			},
			{
				blankLine: "always",
				prev: ["*"],
				next: ["return"],
			},
		],
		"react/jsx-sort-props": [
			"warn",
			{
				ignoreCase: false,
				callbacksLast: true,
				shorthandFirst: true,
				reservedFirst: true,
			},
		],
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				prefer: "type-imports",
				fixStyle: "inline-type-imports",
			},
		],
	},
	ignorePatterns: [
		"dist",
		".eslintrc.cjs",
		"node_modules/",
		"build/",
		"ios/**/*",
		"android/**/*",
		"build/",
		"!.*",
		"src/generated/",
		"**/*.d.ts",
		"public/entry.worker.js",
	],
	settings: {
		react: {
			version: "detect",
		},
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			alias: {
				map: [["", "./public"]],
				extensions: [".ts", "tsx"],
			},
			typescript: true,
			node: true,
		},
	},
};
