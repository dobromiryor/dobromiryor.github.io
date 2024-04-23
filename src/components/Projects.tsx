import { PROJECTS } from "../content/projects.content";
import { AppCard } from "./AppCard";

export const Projects = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
			{PROJECTS.map((project, index) => (
				<AppCard
					key={`Project__${project.title}__${index}`}
					project={project}
				/>
			))}
		</div>
	);
};
