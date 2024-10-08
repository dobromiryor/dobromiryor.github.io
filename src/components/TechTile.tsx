import clsx from "clsx";

import { type Tech as TechEnum } from "../enums/tech.enum";
import { type Tech } from "../types/tech.type";

export const TechTile = ({ tech }: { tech: Tech }) => {
	const techStyles: { [key in TechEnum]: string } = {
		css: "bg-blue-700 text-white",
		html: "bg-orange-600 text-gray-200",
		i18n: "bg-teal-600 text-white",
		js: "bg-amber-300 text-zinc-800",
		nodejs: "bg-green-600 text-zinc-800",
		postgres: "bg-cyan-800 text-white",
		prisma: "bg-gray-100 text-sky-950",
		pwa: "bg-violet-800 text-white",
		react: "bg-cyan-500 text-gray-800",
		remix: "bg-indigo-50 text-black",
		tailwind: "bg-sky-400 text-white",
		ts: "bg-blue-600 text-white",
		zustand: "bg-stone-300 text-blue-700",
		swr: "bg-neutral-900 text-gray-100",
		supabase: "bg-emerald-800 text-white",
		pinia: "bg-amber-300 text-gray-900",
		vue: "text-slate-700 bg-emerald-400",
	};

	const baseStyles =
		"text-xs font-medium py-1 px-2 rounded-lg select-none hover:";

	return <li className={clsx(techStyles[tech.id], baseStyles)}>{tech.name}</li>;
};
