import { useContext, useEffect } from "react";
import { useHashLocation } from "wouter/use-hash-location";

import { Route } from "../enums/route.enum";
import { GravityContext } from "../providers/gravity-provider";

export const useGravity = () => {
	const context = useContext(GravityContext);

	if (context === undefined) {
		throw new Error("useGravity must be used within a GravityProvider");
	}

	const [_, setIsRunning] = context ?? [];

	const [location] = useHashLocation();

	useEffect(() => {
		if (location !== Route.HOME) {
			setIsRunning(false);
		}
	}, [location, setIsRunning]);

	return context;
};
