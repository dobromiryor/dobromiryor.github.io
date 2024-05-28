import { Language } from "../enums/language.enum";
import { SectionType } from "../enums/section.enum";
import { SideSectionType } from "../enums/side-section.enum";
import { type CVs as CV } from "../types/cv.type";

export const CVs: CV = {
	en: {
		lang: Language.EN,
		personalDetails: {
			firstName: "Dobromir",
			lastName: "Yordanov",
			city: "Plovdiv",
			country: "Bulgaria",
			website: "dobromiryor.github.io",
			email: "dobromir.yor@gmail.com",
			phone: "+359896896834",
		},
		sections: [
			{
				title: "Relevant Experience",
				type: SectionType.EXPERIENCE,
				list: [
					{
						company: "Browserbite",
						position: "Front End Developer",
						period: "February 2022 - July 2023",
						tasks: [
							"Developed web and mobile minimum viable product (MVP) applications for diverse sectors such as legal, logistics and restaurant services.",
							"Utilized React/React Native, TypeScript, RTK Query, tailwindcss, variety of UI libraries",
							"Implemented complex business logic, overcoming technical challenges and achieving desired functionality.",
							"Collaborated with multidisciplinary teams to achieve project objectives.",
						],
					},
					{
						company: "SentecaCommerce",
						position: "Front End Developer",
						period: "June 2021 - February 2022",
						tasks: [
							"Developing fast ecommerce websites using React on top of SentecaCommerce's proprietary platform.",
							"Transforming Figma designs into functioning pages using styled-components and tailwindcss.",
						],
					},
					{
						company: "m+w MediaNetworks",
						position: "Front End Developer",
						period: "September 2019 - March 2020",
						tasks: [
							"Turning design mockups into product pages.",
							"Creating product banners following design guidelines.",
							"Making shelf label templates from design mockups.",
							"Refreshing, testing and bug fixing the company's website.",
						],
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
					},
				],
			},
		],
		sideSection: [
			{
				title: "Skills/Tools",
				type: SideSectionType.SKILLS,
				list: [
					"HTML",
					"CSS/SCSS",
					"tailwindcss",
					"styled-components",
					"JavaScript",
					"TypeScript",
					"React",
					"React Native",
					"Redux/RTK",
					"Remix",
					"Next",
					"Gatsby",
					"jQuery",
					"yup/zod",
					"msw",
					"Jest",
					"Testing Library",
					"D3",
					"Three/R3F",
					"Git",
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
			email: "dobromir.yor@gmail.com",
			phone: "+359896896834",
		},
		sections: [
			{
				title: "Приложим опит",
				type: SectionType.EXPERIENCE,
				list: [
					{
						company: "Browserbite",
						position: "Front End Developer",
						period: "Февруари 2022 - Юли 2023",
						tasks: [
							"Разработка на уеб и мобилни minimum viable product (MVP) приложения за разнообразни сектори като юридически, логистични и ресторантьорски услуги.",
							"Използване на React/React Native, TypeScript, RTK Query, tailwindcss и различни UI библиотеки.",
							"Имплементация на сложна бизнес логика, преодоляване на технически предизвикателства и постигане на желаната функционалност.",
							"Сътрудничество с мултидисциплинарни екипи за постигане на целите на проекта.",
						],
					},
					{
						company: "SentecaCommerce",
						position: "Front End Developer",
						period: "Юни 2021 - Февруари 2022",
						tasks: [
							"Разработване на бързи ecommerce уебсайтове използвайки React, върху платформата на SentecaCommerce.",
							"Превръщане на Figma дизайни във функционални страници, използвайки styled-components и tailwindcss.",
						],
					},
					{
						company: "m+w MediaNetworks",
						position: "Front End Developer",
						period: "Септември 2019 - Март 2020",
						tasks: [
							"Превръщане на дизайни в продуктови страници.",
							"Създаване на продуктови банери следвайки дизайнерските насоки.",
							"Изработване на шаблони за супермаркети по готов дизайн.",
							"Обновяване, тестване и отстраняване на бъгове на уебсайта на комапнията.",
						],
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
						school: 'Пловдивски университет "Паисий Хилендарски"',
					},
				],
			},
		],
		sideSection: [
			{
				title: "Умения/Инструменти",
				type: SideSectionType.SKILLS,
				list: [
					"HTML",
					"CSS/SCSS",
					"tailwindcss",
					"styled-components",
					"JavaScript",
					"TypeScript",
					"React",
					"React Native",
					"Redux/RTK",
					"Remix",
					"Next",
					"Gatsby",
					"jQuery",
					"yup/zod",
					"msw",
					"Jest",
					"Testing Library",
					"D3",
					"Three/R3F",
					"Git",
				],
			},
			{
				title: "Езици",
				type: SideSectionType.LANGUAGES,
				list: ["Български", "Английски"],
			},
		],
	},
};
