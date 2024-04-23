import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Rubik", "sans-serif"],
		},
		extend: {
			screens: {
				a4: "880px",
			},
			animation: {
				"custom-spin": "custom-spin 5000ms linear infinite",
				dash: "dash 500ms linear infinite ",
			},
			keyframes: {
				"custom-spin": {
					from: {
						transform: "translate(-50%, -50%) rotate(0deg)",
					},
					to: {
						transform: "translate(-50%, -50%) rotate(360deg)",
					},
				},
				dash: {
					"0%": {
						strokeDashoffset: "0",
					},
					"100%": {
						strokeDashoffset: "100",
					},
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
