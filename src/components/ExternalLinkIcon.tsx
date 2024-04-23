import { type SVGProps } from "react";

export const ExternalLinkSVG = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M114 120H26a6 6 0 01-6-6V26a6 6 0 016-6h38a6 6 0 006-6V6a6 6 0 00-6-6H12A12 12 0 000 12v116a12 12 0 0012 12h116a12 12 0 0012-12V76a6 6 0 00-6-6h-8a6 6 0 00-6 6v38a6 6 0 01-6 6z" />
			<rect
				height="70"
				rx="6"
				ry="6"
				transform="rotate(45 99 41)"
				width="19.8"
				x="89.4"
				y="5.7"
			/>
			<path d="M140 6v40a6 6 0 01-10 4L90 10a6 6 0 014-10h40a6 6 0 016 6z" />
		</svg>
	);
};
