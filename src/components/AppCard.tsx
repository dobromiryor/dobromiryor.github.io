import { type Project } from "../types/project.type";
import { ExternalLinkSVG } from "./ExternalLinkIcon";
import { ExternalLink } from "./Link";
import { TechTile } from "./TechTile";

interface AppCardProps {
	project: Project;
}

export const AppCard = ({ project }: AppCardProps) => {
	const { credits, description, stack, title, url } = project;

	return (
		<div className="flex flex-col gap-2 p-4 rounded-lg border border-stone-400 dark:border-neutral-700 hover:border-stone-500 hover:dark:border-neutral-600 hover:backdrop-blur-[2px] transition-all duration-300">
			<div className="flex items-center gap-2">
				<h2 className="font-bold text-xl">{title}</h2>
				<a href={url} rel="noreferrer" target="_blank">
					<ExternalLinkSVG
						aria-label={`Link to ${title}`}
						className="fill-neutral-800 dark:fill-stone-300 hover:fill-neutral-700 hover:dark:fill-stone-200 transition-colors"
						height={12}
						width={12}
					/>
				</a>
			</div>
			<span>{description}</span>
			<ul className="flex flex-col gap-1">
				{credits.map((item, index) => (
					<li
						key={`Credit__${item.name}__${index}`}
						className="flex gap-1 flex-wrap"
					>
						{item.text}
						<ExternalLink href={item.url}>{item.name}</ExternalLink>
					</li>
				))}
			</ul>
			<ul className="flex gap-1 flex-wrap mt-auto">
				{stack.map((tech, index) => (
					<TechTile key={`Stack__${tech.name}__${index}`} tech={tech} />
				))}
			</ul>
		</div>
	);
};
