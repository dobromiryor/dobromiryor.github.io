import clsx from "clsx";
import { type AnchorHTMLAttributes } from "react";
import { Link as WouterLink, type LinkProps as WouterLinkProps } from "wouter";

import { SquiggleStroke } from "./SquiggleStroke";

type LinkProps = Omit<WouterLinkProps, "href" | "to" | "asChild"> & {
	className?: string;
	href: string;
	scrollToTop?: boolean;
};

export const Link = ({
	children,
	className,
	scrollToTop = false,
	...props
}: LinkProps) => {
	return (
		<div className="relative group whitespace-nowrap w-min">
			<WouterLink
				className={clsx("font-medium", className)}
				onClick={() => scrollToTop && window.scrollTo(0, 0)}
				{...props}
			>
				{children}
			</WouterLink>
			<SquiggleStroke className="absolute -translate-y-2 -z-10 group-hover:animate-dash w-full h-full" />
		</div>
	);
};

export const ExternalLink = ({
	children,
	className,
	...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
	return (
		<div className="relative group whitespace-nowrap w-min">
			<a
				className={clsx("font-medium", className)}
				rel="noreferrer"
				target="_blank"
				{...props}
			>
				{children}
			</a>
			<SquiggleStroke className="absolute -translate-y-2 -z-10 group-hover:animate-dash w-full h-full" />
		</div>
	);
};
