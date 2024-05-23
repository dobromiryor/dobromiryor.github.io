import { useEffect } from "react";

import { Button } from "../components/Button";
import { Head } from "../components/Head";
import { Link } from "../components/Link";
import { CVs } from "../content/cvs.content";
import { Route } from "../enums/route.enum";
import { useLanguage } from "../hooks/useLanguage";

const TITLE = "CV | Dobromir Yordanov";

const PRINT_TITLE = {
	bg: "CV_Добромир_Йорданов_Frontend_Разработчик",
	en: "CV_Dobromir_Yordanov_Frontend_Developer",
};

export const CV = () => {
	const lang = useLanguage();

	const { personalDetails, sections, sideSection } = CVs[lang];

	const handlePrint = () => {
		document.title = PRINT_TITLE[lang];
		window.print();
	};

	useEffect(() => {
		const handleAfterPrint = () => {
			if (document.title !== TITLE) {
				document.title = TITLE;
			}
		};

		window.addEventListener("afterprint", handleAfterPrint);

		return () => window.removeEventListener("afterprint", handleAfterPrint);
	}, []);

	return (
		<>
			<Head title={TITLE} />
			<div
				className="flex flex-col gap-8 a4:items-center min-h-full print:text-black"
				style={{ pageBreakAfter: "avoid" }}
			>
				<div className="flex justify-between print:hidden px-4 mt-4 a4:w-[210mm] a4:p-0">
					<div className="flex gap-2">
						<Link scrollToTop href={Route.HOME}>
							Home
						</Link>
						<Button onClick={handlePrint}>Print/Save as PDF</Button>
					</div>
					<div className="flex gap-2">
						<Link href={Route.CV_BG}>BG</Link>
						<Link href={Route.CV_EN}>EN</Link>
					</div>
				</div>
				<article className="flex flex-col justify-between gap-6 p-4 a4:w-[210mm] a4:min-h-[297mm] a4:border  a4:border-stone-400 a4:dark:border-neutral-700 print:w-[210mm] print:min-h-[297mm] a4:p-[10mm] print:p-[10mm] print:border-0">
					<h1 className="flex flex-col text-3xl font-bold uppercase">
						<span>{personalDetails.firstName}</span>
						<span>{personalDetails.lastName}</span>
					</h1>
					<div className="grid grid-cols-1 auto-rows-auto a4:grid-flow-col a4:grid-rows-[repeat(2,minmax(0,auto))] a4:grid-cols-3 print:grid-flow-col print:grid-rows-[repeat(2,minmax(0,auto))] print:grid-cols-3 gap-4">
						{sections.map((section, index) => (
							<section
								key={`Section__${section.title}__${section.type}__${index}`}
								className="a4:col-span-2 print:col-span-2 flex flex-col gap-2"
							>
								<h2 className="text-2xl font-bold uppercase">
									{section.title}
								</h2>
								<ul className="flex flex-col gap-2">
									{section.list.map((item, listIndex) =>
										"company" in item ? (
											<li
												key={`Section__${section.title}__${section.type}__${index}__Item__${item.company}__${listIndex}`}
											>
												<h3 className="text-xl font-semibold">
													{item.company}
												</h3>
												<h4 className="font-medium">{item.position}</h4>
												<h5 className="text-xs">{item.period}</h5>
												<ul>
													{item.tasks.map((task, taskIndex) => (
														<li
															key={`Section__${section.title}__${section.type}__${index}__Item__${item.company}__${listIndex}__Task__${taskIndex}`}
														>
															{task}
														</li>
													))}
												</ul>
											</li>
										) : (
											<li
												key={`Section__${section.title}__${section.type}__${index}__Item__${item.school}__${listIndex}`}
											>
												<h3 className="text-lg font-medium">{item.school}</h3>
												<h4 className="font-medium">{item.field}</h4>
												<h5 className="text-sm">{item.period}</h5>
											</li>
										)
									)}
								</ul>
							</section>
						))}
						{sideSection.map((sideSection, index) => (
							<section
								key={`Side__Section__${sideSection.title}__${sideSection.type}__${index}`}
								className="flex flex-col gap-2"
							>
								<h2 className="text-2xl font-bold uppercase">
									{sideSection.title}
								</h2>
								<ul>
									{sideSection.list.map((item, listIndex) => (
										<li
											key={`Side__Section__${sideSection.title}__${sideSection.type}__${index}__Item__${item}__${listIndex}`}
										>
											{item}
										</li>
									))}
								</ul>
							</section>
						))}
					</div>
					<section className="grid grid-cols-1 a4:grid-rows-2 a4:grid-cols-3 a4:grid-flow-col print:grid-rows-2 print:grid-cols-3 print:grid-flow-col gap-x-4">
						<span className="font-medium">
							{personalDetails.firstName} {personalDetails.lastName}
						</span>
						<a
							className="font-medium"
							href={`http://${personalDetails.website}`}
							rel="noreferrer"
							target="_blank"
						>
							{personalDetails.website}
						</a>
						<a className="font-medium" href={`tel:${personalDetails.phone}`}>
							{personalDetails.phone}
						</a>
						<a
							className="font-medium"
							href={`mailto:${personalDetails.email}`}
							rel="noreferrer"
							target="_blank"
						>
							{personalDetails.email}
						</a>
						<span className="font-medium">{personalDetails.city}</span>
						<span className="font-medium">{personalDetails.country}</span>
					</section>
				</article>
			</div>
		</>
	);
};
