import { useContext, useEffect, type RefObject } from "react";

import { ObserverContext } from "../providers/observer-provider";

interface ObserverProps extends IntersectionObserverInit {
	isSingleUse?: boolean;
}

export const useObserver = ((options?: ObserverProps) => {
	const { isSingleUse, ...observerOptions } = options ?? {};
	const context = useContext(ObserverContext);

	if (context === undefined) {
		throw new Error("useObserver must be used within a ObserverProvider");
	}

	const [ref, isIntersecting, setIsIntersecting] = context;

	useEffect(() => {
		const callback = (entries: IntersectionObserverEntry[]) => {
			const [entry] = entries;

			if (isSingleUse && entry.isIntersecting && ref.current != null) {
				setIsIntersecting(entry.isIntersecting);
				observer.unobserve(ref.current);
				observer.disconnect();
			} else {
				setIsIntersecting(entry.isIntersecting);
			}
		};

		const observer = new IntersectionObserver(callback, observerOptions);

		if (ref.current != null) {
			observer.observe(ref.current);
		}

		() => () => {
			if (ref.current != null) {
				observer.unobserve(ref.current);
			}
		};
	}, [isSingleUse, observerOptions, ref, setIsIntersecting]);

	return options !== undefined ? ref : isIntersecting;
}) as ((options: ObserverProps) => RefObject<HTMLDivElement>) & (() => boolean);
