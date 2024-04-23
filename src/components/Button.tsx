import clsx from "clsx";
import { type ButtonHTMLAttributes } from "react";

import { SquiggleStroke } from "./SquiggleStroke";

export const Button = ({
	className,
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
	<div className="relative group whitespace-nowrap w-min">
		<button className={clsx("font-medium", className)} {...props}>
			{children}
		</button>
		<SquiggleStroke className="absolute -translate-y-2 -z-10 group-hover:animate-dash w-full h-full" />
	</div>
);
