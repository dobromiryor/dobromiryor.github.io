import { Tech } from "../enums/tech.enum";
import { type Project } from "../types/project.type";

export const PROJECTS: Project[] = [
	{
		title: "Yum",
		description:
			"A Remix recipe app with internationalization, detailed instructions, servings calculation, unit conversion, ratings and comments.",
		credits: [
			{
				text: "Emails sent by ",
				name: "SendGrid",
				url: "https://sendgrid.com/",
			},
			{
				text: "Images hosted at ",
				name: "Cloudinary",
				url: "https://cloudinary.com/",
			},
			{
				text: "App hosted at ",
				name: "Fly.io",
				url: "https://fly.io/",
			},
		],
		url: "https://yum.fly.dev/",
		stack: [
			{ name: "TypeScript", id: Tech.TS },
			{ name: "React", id: Tech.REACT },
			{ name: "Remix", id: Tech.REMIX },
			{ name: "PostgreSQL", id: Tech.POSTGRES },
			{ name: "Prisma", id: Tech.PRISMA },
			{ name: "Tailwind", id: Tech.TW },
			{ name: "i18next", id: Tech.I18N },
			{ name: "PWA", id: Tech.PWA },
		],
	},
	{
		title: "Weather App",
		description:
			"A weather PWA that shows weather conditions by search or by using the device's location. Made using React.",
		credits: [
			{
				text: "Weather icons and data from ",
				name: "OpenWeatherMap",
				url: "https://openweathermap.org/",
			},
			{
				text: "Other icons made by ",
				name: "Font Awesome",
				url: "https://fontawesome.com/",
			},
		],
		url: "https://dobromiryor.github.io/weather-app/",
		stack: [
			{ name: "HTML", id: Tech.HTML },
			{ name: "CSS", id: Tech.CSS },
			{ name: "JavaScript", id: Tech.JS },
			{ name: "React", id: Tech.REACT },
			{ name: "PWA", id: Tech.PWA },
		],
	},
	{
		title: "Super Brick Game",
		description:
			"Simple Tetris game made using JavaScript and styled to mimic the knockoff handheld consoles of the 90s.",
		credits: [
			{
				text: "Sounds made by ",
				name: "Kenney",
				url: "https://kenney.nl/",
			},
		],
		url: "https://dobromiryor.github.io/tetris-js/",
		stack: [
			{ name: "HTML", id: Tech.HTML },
			{ name: "CSS", id: Tech.CSS },
			{ name: "JavaScript", id: Tech.JS },
		],
	},
];
