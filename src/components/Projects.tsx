import { PROJECTS } from "../content/projects.content";
import { useObserver } from "../hooks/useObserver";
import { AppCard } from "./AppCard";

export const Projects = () => {
	const ref = useObserver({ isSingleUse: true });

	return (
		<div
			ref={ref}
			className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 max-w-screen-2xl"
		>
			{PROJECTS.map((project, index) => (
				<AppCard
					key={`Project__${project.title}__${index}`}
					project={project}
				/>
			))}
		</div>
	);
};
