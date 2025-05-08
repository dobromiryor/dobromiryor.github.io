import { Language } from "../enums/language.enum";
import { SectionType } from "../enums/section.enum";
import { SideSectionType } from "../enums/side-section.enum";
import { type CVs as CV } from "../types/cv.type";

const tools = [
	"HTML",
	"CSS/SCSS",
	"JS/TS",
	"Node.js",
	"React/React Native",
	"Remix/React Router 7",
	"Next.js",
	"Vue.js",
	"Tailwind",
	"styled-components",
	"Redux",
	"Zustand",
	"Tanstack Query",
	"Pinia",
	"Git",
	"Jest/Vitest",
	"yup/zod",
	"msw",
	"NestJS",
	"REST API",
	"Prisma/Drizzle",
	"Three.js/R3F",
	"D3",
];

export const CVs: CV = {
	en: {
		lang: Language.EN,
		personalDetails: {
			firstName: "Dobromir",
			lastName: "Yordanov",
			city: "Plovdiv",
			country: "Bulgaria",
			website: "dobromiryor.github.io",
			email: "dobromiryor@gmail.com",
			phone: "+359896896834",
			position: "Frontend Developer",
		},
		sections: [
			{
				title: "Relevant Experience",
				type: SectionType.EXPERIENCE,
				list: [
					{
						company: "Browserbite",
						position: "Software Developer",
						period: "February 2022 - July 2023",
						tasks: [
							"Developed web and mobile minimum viable product (MVP) applications for diverse sectors such as legal, logistics restaurant services, etc.",
							"Utilized React/React Native, TypeScript, Context API, Redux, RTK Query, Tailwind, variety of UI libraries.",
							"Implemented complex business logic, overcoming technical challenges and achieving desired functionality.",
							"Collaborated with multidisciplinary external and internal teams to achieve project objectives.",
						],
						location: "Remote",
					},
					{
						company: "SentecaCommerce",
						position: "Frontend Developer",
						period: "June 2021 - February 2022",
						tasks: [
							"Developing fast ecommerce websites using Next.js on top of SentecaCommerce's proprietary platform.",
							"Transforming Figma designs into accessible, responsive and functional pages using styled-components and Tailwind.",
							"SEO optimization, analytics and third-party service integration.",
						],
						location: "Remote/Hybrid",
					},
					{
						company: "MW Media Networks",
						position: "Junior Frontend Developer",
						period: "September 2019 - March 2020",
						tasks: [
							"Translated design mockups into functional and responsive product pages, ensuring a seamless user experience.",
							"Designed and developed product banners adhering to brand guidelines.",
							"Created reusable shelf label templates from design mockups.",
							"Performed website maintenance tasks, including bug fixes and code enhancements to ensure optimal functionality.",
						],
						location: "Plovdiv, Bulgaria",
					},
				],
			},
			{
				title: "Education",
				type: SectionType.EDUCATION,
				list: [
					{
						field: "Business Information Technology",
						period: "2012 - 2018",
						school: 'Plovdiv University "Paisii Hilendarski"',
						location: "Plovdiv, Bulgaria",
					},
				],
			},
		],
		sideSection: [
			{
				title: "Skills",
				type: SideSectionType.SKILLS,
				list: [
					"Adaptability",
					"Attention to detail",
					"Teamwork",
					" ",
					...tools,
				],
			},
			{
				title: "Languages",
				type: SideSectionType.LANGUAGES,
				list: ["Bulgarian", "English"],
			},
		],
	},
	bg: {
		lang: Language.BG,
		personalDetails: {
			firstName: "Добромир",
			lastName: "Йорданов",
			city: "Пловдив",
			country: "България",
			website: "dobromiryor.github.io",
			email: "dobromiryor@gmail.com",
			phone: "+359896896834",
			position: "Frontend Developer",
		},
		sections: [
			{
				title: "Приложим опит",
				type: SectionType.EXPERIENCE,
				list: [
					{
						company: "Browserbite",
						position: "Software Developer",
						period: "Февруари 2022 - Юли 2023",
						tasks: [
							"Разработка на уеб и мобилни minimum viable product (MVP) приложения за разнообразни сектори като юридически, логистични, ресторантьорски услуги и други.",
							"Използване на React/React Native, TypeScript, Context API, Redux, RTK Query, Tailwind и различни UI библиотеки.",
							"Имплементация на сложна бизнес логика, преодоляване на технически предизвикателства и постигане на желаната функционалност.",
							"Сътрудничество с мултидисциплинарни вътрешни и външни екипи за постигане на целите на проекта.",
						],
						location: "Remote",
					},
					{
						company: "SentecaCommerce",
						position: "Frontend Developer",
						period: "Юни 2021 - Февруари 2022",
						tasks: [
							"Разработване на бързи ecommerce уебсайтове използвайки Next.js, върху платформата на SentecaCommerce.",
							"Превръщане на Figma дизайни в адаптивни, достъпни и функционални страници, използвайки styled-components и Tailwind.",
							"SEO оптимизация, интеграция на анализи и услуги от трети страни.",
						],
						location: "Remote/Hybrid",
					},
					{
						company: "MW Media Networks",
						position: "Junior Frontend Developer",
						period: "Септември 2019 - Март 2020",
						tasks: [
							"Превръщане на дизайни във функционални и адаптивни продуктови страници, осигурявайки безпроблемно потребителско изживяване.",
							"Създаване на продуктови банери спазвайки указанията за бранда.",
							"Изработване на шаблони за етикети за супермаркети по готов дизайн.",
							"Поддръжка на уебсайта на компанията, включително отстраняване на грешки и подобрения на кода за осигуряване на оптимална функционалност.",
						],
						location: "Пловдив, България",
					},
				],
			},
			{
				title: "Образование",
				type: SectionType.EDUCATION,
				list: [
					{
						field: "Бизнес информационни технологии",
						period: "2012 - 2018",
						school: 'ПУ "Паисий Хилендарски"',
						location: "Пловдив, България",
					},
				],
			},
		],
		sideSection: [
			{
				title: "Умения",
				type: SideSectionType.SKILLS,
				list: ["Адаптивност", "Око за детайли", "Работа в екип", " ", ...tools],
			},
			{
				title: "Езици",
				type: SideSectionType.LANGUAGES,
				list: ["Български", "Английски"],
			},
		],
	},
};
