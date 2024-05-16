import { useRoute } from "wouter";

import { Route } from "../enums/route.enum";
import { ExternalLink, Link } from "./Link";

export const Footer = () => {
	const [isHome] = useRoute("/");

	return (
		<div className="absolute bottom-0 w-full flex justify-center items-center px-4 border-t border-t-stone-400 dark:border-t-neutral-700 print:hidden h-24">
			<footer className="flex gap-4 w-full max-w-screen-2xl">
				<img className="rounded-full max-w-16" src="/images/me.png" />
				<div className="flex flex-col justify-center">
					<span className="text-lg font-semibold">Dobromir Yordanov</span>

					<ul className="flex gap-2">
						<li>
							{isHome ? (
								<Link className="text-sm" href={Route.CV_EN}>
									CV
								</Link>
							) : (
								<Link className="text-sm" href={Route.HOME}>
									Home
								</Link>
							)}
						</li>
						<li>
							<ExternalLink
								className="text-sm"
								href="https://www.linkedin.com/in/dobromiryor/"
							>
								LinkedIn
							</ExternalLink>
						</li>
						<li>
							<ExternalLink
								className="text-sm"
								href="https://github.com/dobromiryor/"
							>
								GitHub
							</ExternalLink>
						</li>
						<li>
							<ExternalLink
								className="text-sm"
								href="mailto:dobromir.yor@gmail.com"
							>
								Mail
							</ExternalLink>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};
