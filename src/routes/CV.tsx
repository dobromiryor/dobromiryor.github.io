import clsx from "clsx";
import { useEffect, useState } from "react";

import { Button } from "../components/Button";
import { Head } from "../components/Head";
import { Link } from "../components/Link";
import { CVs } from "../content/cvs.content";
import { Language } from "../enums/language.enum";
import { Route } from "../enums/route.enum";
import { useLanguage } from "../hooks/useLanguage";

const TITLE = "CV | Dobromir Yordanov";
const LOCAL_STORAGE_KEY = "_";

export const CV = () => {
	const lang = useLanguage();

	const { personalDetails, sections, sideSection } = CVs[lang];

	const [clickCount, setClickCount] = useState(0);
	const [canEdit, setCanEdit] = useState(false);
	const [isPositionVisible, setIsPositionVisible] = useState(true);
	const [position, setPosition] = useState(personalDetails.position);
	const [isEducationInfoVisible, setIsEducationInfoVisible] = useState(false);

	const handleClickCount = () => {
		if (clickCount <= 10) {
			setClickCount((prev) => prev + 1);
		}
	};

	const handleClickCountReset = () => {
		const localStorageExists =
			typeof localStorage.getItem(LOCAL_STORAGE_KEY) === "string";

		if (localStorageExists) {
			localStorage.removeItem(LOCAL_STORAGE_KEY);
		}

		setCanEdit(false);
		setClickCount(0);
	};

	const handlePrint = () => {
		document.title = `CV_${personalDetails.firstName}_${personalDetails.lastName}_${personalDetails.position.replace(" ", "_")}`;
		window.print();
	};

	useEffect(() => {
		if (clickCount === 10) {
			localStorage.setItem(LOCAL_STORAGE_KEY, "");
			setCanEdit(true);
		}
	}, [clickCount]);

	useEffect(() => {
		const localStorageExists =
			typeof localStorage.getItem(LOCAL_STORAGE_KEY) === "string";

		if (localStorageExists) {
			setCanEdit(true);
		}
	}, []);

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
				className="flex flex-col gap-[8mm] a4:items-center min-h-full print:text-black"
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
				{canEdit && (
					<div className="flex flex-col sm:flex-row justify-center items-center gap-4 print:hidden ">
						<label>
							<span className="mr-2">Position</span>
							<input
								className="px-2 rounded"
								value={position}
								onChange={(e) => setPosition(e.target.value)}
							/>
						</label>
						<label>
							<span className="mr-2">Show position</span>
							<input
								checked={isPositionVisible}
								type="checkbox"
								onChange={(e) => setIsPositionVisible(e.target.checked)}
							/>
						</label>
						<label>
							<span className="mr-2">Show education info</span>
							<input
								checked={isEducationInfoVisible}
								type="checkbox"
								onChange={(e) => setIsEducationInfoVisible(e.target.checked)}
							/>
						</label>
					</div>
				)}
				<article className="flex flex-col gap-[8mm] p-4 a4:w-[210mm] a4:min-h-[297mm] a4:border  a4:border-stone-400 a4:dark:border-neutral-700 print:w-[210mm] print:min-h-[297mm] a4:p-[8mm] print:p-[8mm] print:border-0">
					<section className="grid grid-cols-1 auto-rows-auto sm:grid-flow-row sm:grid-rows-[repeat(1,minmax(0,auto))] sm:grid-cols-2 a4:grid-flow-row a4:grid-rows-[repeat(2,minmax(0,auto))] a4:grid-cols-3 print:grid-flow-row print:grid-rows-[repeat(2,minmax(0,auto))] print:grid-cols-3 gap-x-6">
						<section
							className={clsx(
								"sm:col-span-1 a4:col-span-2 print:col-span-2 flex flex-col",
								!isPositionVisible && "justify-between"
							)}
						>
							<h1
								className="text-2xl font-bold uppercase"
								onClick={handleClickCount}
							>
								{personalDetails.firstName} {personalDetails.lastName}
							</h1>
							{isPositionVisible && (
								<h2 className="text-xl font-semibold uppercase">
									{position ?? personalDetails.position}
								</h2>
							)}
							<h3
								className="text-sm font-medium"
								onClick={handleClickCountReset}
							>
								{personalDetails.city}, {personalDetails.country}
							</h3>
						</section>
						<section className="sm:items-end a4:items-start a4:col-span-1 print:items-start print:col-span-1 flex flex-col justify-evenly text-sm font-medium">
							<a
								href={`http://${personalDetails.website}`}
								rel="noreferrer"
								target="_blank"
							>
								{personalDetails.website}
							</a>
							<a
								href={`mailto:${personalDetails.email}`}
								rel="noreferrer"
								target="_blank"
							>
								{personalDetails.email}
							</a>
							<a href={`tel:${personalDetails.phone}`}>
								{personalDetails.phone}
							</a>
						</section>
					</section>
					<section className="grid grid-cols-1 auto-rows-auto a4:grid-flow-col a4:grid-rows-[repeat(2,minmax(0,auto))] a4:grid-cols-3 print:grid-flow-col print:grid-rows-[repeat(2,minmax(0,auto))] print:grid-cols-3 gap-[8mm]">
						{sections.map((section, index) => (
							<section
								key={`Section__${section.title}__${section.type}__${index}`}
								className="a4:col-span-2 print:col-span-2 flex flex-col gap-3"
							>
								<h3 className="text-xl font-bold uppercase">{section.title}</h3>
								<ul className="flex flex-col gap-2">
									{section.list.map((item, listIndex) =>
										"company" in item ? (
											<li
												key={`Section__${section.title}__${section.type}__${index}__Item__${item.company}__${listIndex}`}
											>
												<section
													className={clsx(
														lang === Language.BG &&
															"text-[0.90rem] leading-[1.35rem]"
													)}
												>
													<hgroup className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
														<h4 className="text-lg font-semibold">
															{item.position}
														</h4>
														<p className="text-sm">{item.period}</p>
													</hgroup>
													<hgroup className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
														<h5 className="text-base font-medium">
															{item.company}
														</h5>
														<p className="text-sm">{item.location}</p>
													</hgroup>
													<ul className="mt-2">
														{item.tasks.map((task, taskIndex) => (
															<li
																key={`Section__${section.title}__${section.type}__${index}__Item__${item.company}__${listIndex}__Task__${taskIndex}`}
															>
																{task}
															</li>
														))}
													</ul>
												</section>
											</li>
										) : (
											<li
												key={`Section__${section.title}__${section.type}__${index}__Item__${item.school}__${listIndex}`}
											>
												<section>
													<hgroup className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
														<h4 className="text-lg font-medium">
															{item.field}
														</h4>
														{isEducationInfoVisible && (
															<p className="text-sm">{item.period}</p>
														)}
													</hgroup>
													<hgroup className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
														<h5 className="font-medium">{item.school}</h5>
														{isEducationInfoVisible && (
															<p className="text-sm whitespace-nowrap">
																{item.location}
															</p>
														)}
													</hgroup>
												</section>
											</li>
										)
									)}
								</ul>
							</section>
						))}
						{sideSection.map((sideSection, index) => (
							<section
								key={`Side__Section__${sideSection.title}__${sideSection.type}__${index}`}
								className="flex flex-col gap-3"
							>
								<h2 className="text-xl font-bold uppercase">
									{sideSection.title}
								</h2>
								<ul>
									{sideSection.list.map((item, listIndex) =>
										item === " " ? (
											<br
												key={`Side__Section__${sideSection.title}__${sideSection.type}__${index}__Item__Break__${listIndex}`}
											/>
										) : (
											<li
												key={`Side__Section__${sideSection.title}__${sideSection.type}__${index}__Item__${item}__${listIndex}`}
											>
												{item}
											</li>
										)
									)}
								</ul>
							</section>
						))}
					</section>
				</article>
			</div>
		</>
	);
};
