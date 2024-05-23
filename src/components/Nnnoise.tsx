import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Theme } from "../enums/theme.enum";
import { useTheme } from "../hooks/useTheme";

const MIN = 1;
const MAX = 1000;

const FILTERS = [
	{ id: "red", color: "#f44336", baseSeed: 2 },
	{ id: "purple", color: "#9c27b0", baseSeed: 4 },
	{ id: "blue", color: "#2196f3", baseSeed: 6 },
	{ id: "cyan", color: "#00bcd4", baseSeed: 8 },
	{ id: "green", color: "#4caf50", baseSeed: 10 },
	{ id: "yellow", color: "#ffeb3b", baseSeed: 12 },
	{ id: "orange", color: "#ff9800", baseSeed: 14 },
];

export const Nnnoise = () => {
	const [size, setSize] = useState(0);
	const theme = useTheme();

	const seedModifier = useMemo(
		() => Math.floor(Math.random() * (MAX - MIN + 1) + MIN),
		[]
	);

	const onResize = useCallback(
		() =>
			setSize(
				window.innerHeight >= window.innerWidth
					? window.innerHeight
					: window.innerWidth
			),
		[]
	);

	useEffect(() => {
		window.addEventListener("load", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, [onResize]);

	useEffect(() => {
		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("load", onResize);
		};
	}, [onResize]);

	return (
		<svg
			className={clsx(
				"print:hidden pointer-events-none fixed top-0 left-0 overflow-hidden z-50"
			)}
			height={size}
			opacity={theme === Theme.DARK ? "0.05" : "0.25"}
			version="1.1"
			viewBox={`0 0 ${size} ${size}`}
			width={size}
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				{FILTERS.map((filter, index) => (
					<filter
						key={`Nnnoise__Filter__${filter}__${index}`}
						colorInterpolationFilters="linearRGB"
						filterUnits="objectBoundingBox"
						height="140%"
						id={`nnnoise-filter-${filter.id}`}
						primitiveUnits="userSpaceOnUse"
						width="140%"
						x="-20%"
						y="-20%"
					>
						<feTurbulence
							baseFrequency="0.2"
							height="100%"
							numOctaves="4"
							result="turbulence"
							seed={filter.baseSeed * seedModifier}
							stitchTiles="stitch"
							type="fractalNoise"
							width="100%"
							x="0%"
							y="0%"
						></feTurbulence>
						<feSpecularLighting
							height="100%"
							in="turbulence"
							lightingColor={filter.color}
							result="specularLighting"
							specularConstant="0.9"
							specularExponent="20"
							surfaceScale="18"
							width="100%"
							x="0%"
							y="0%"
						>
							<feDistantLight azimuth="3" elevation="85"></feDistantLight>
						</feSpecularLighting>
					</filter>
				))}
			</defs>
			{FILTERS.map((filter, index) => (
				<rect
					key={`Nnnoise__Rect__${filter}__${index}`}
					fill="transparent"
					filter={`url(#nnnoise-filter-${filter.id})`}
					height={size}
					width={size}
				></rect>
			))}
		</svg>
	);
};
