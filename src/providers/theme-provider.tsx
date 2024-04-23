import { createContext, useEffect, useState, type ReactNode } from "react";

import { Theme } from "../enums/theme.enum";

type ThemeContextType = Theme;

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
);

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(Theme.DARK);

	useEffect(() => {
		const lightModeQuery = window.matchMedia("(prefers-color-scheme: light)");

		if (lightModeQuery.matches) {
			setTheme(Theme.LIGHT);
		}

		if (window.matchMedia != null) {
			lightModeQuery.onchange = (e: MediaQueryListEvent) =>
				setTheme(e.matches ? Theme.LIGHT : Theme.DARK);
		}

		() => () => (lightModeQuery.onchange = null);
	}, []);

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};
