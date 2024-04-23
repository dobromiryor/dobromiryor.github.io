import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "wouter";

const URL = "https://dobromiryor.github.io";

const HeadPortal = ({ children }: { children: ReactNode }) => {
	return createPortal(children, document.head);
};

interface HeadProps {
	title?: string;
	description?: string;
	image?: string;
}

export const Head = ({
	title = "Dobromir Yordanov",
	description = "Just a page where I showcase some of my projects.",
	image = "/waving_hand.svg",
}: HeadProps) => {
	const [location] = useLocation();

	return (
		<HeadPortal>
			<link href={URL} rel="canonical" />
			<link href={URL} rel="dns-prefetch" />
			<title>{title}</title>
			<meta content={description} name="description" />
			<meta content={title} property="og:title" />
			<meta content={`${URL}${location}`} property="og:url" />
			<meta content={image} property="og:image" />
			<meta content={description} property="og:description" />
			<meta content="article" property="og:type" />
			<meta content={image} name="twitter:card" />
			<meta content={title} name="twitter:title" />
			<meta content={description} name="twitter:description" />
			<meta content={image} name="twitter:image" />
		</HeadPortal>
	);
};
