import clsx from "clsx";
import { type HtmlHTMLAttributes } from "react";

import paper from "../resources/paper.svg";
import rock from "../resources/rock.svg";
import scissors from "../resources/scissors.svg";
import silhouette from "../resources/silhouette.svg";

interface IconProps extends HtmlHTMLAttributes<HTMLDivElement> {
	icon: string;
}

export const Icon = ({ icon, className, ...props }: IconProps) => {
	const iconMap = {
		rock,
		paper,
		scissors,
		silhouette,
	};

	const svg = iconMap[icon as keyof typeof iconMap];

	if (svg == null) {
		return null;
	}

	return (
		<div
			aria-label={icon}
			className={clsx("flex justify-center items-center", className)}
			role="img"
			{...props}
		>
			<img alt="" className="w-full h-full" role="presentation" src={svg} />
		</div>
	);
};
