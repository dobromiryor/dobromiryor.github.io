import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Rubik", "sans-serif"],
		},
		extend: {
			screens: {
				"3xl": "2000px",
				a4: "230mm",
			},
			animation: {
				"custom-ping": "1s custom-ping 3s cubic-bezier(0, 0, 0.2, 1)",
				dash: "dash 500ms linear infinite ",
			},
			keyframes: {
				"custom-ping": {
					"75%, 100%": {
						transform: "scale(2)",
						opacity: "0",
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
