import { useContext } from "react";

import { GravityContext } from "../providers/gravity-provider";

export const useGravity = () => {
	const context = useContext(GravityContext);

	if (context === undefined) {
		throw new Error("useGravity must be used within a GravityProvider");
	}

	return context;
};
