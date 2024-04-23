import { useEffect, useState } from "react";
import { useLocation, useSearch } from "wouter";

import { Language } from "../enums/language.enum";

export const useLanguage = () => {
	const [lang, setLang] = useState(Language.EN);

	const [_, setLocation] = useLocation();
	const searchString = useSearch();
	const langParam =
		new URLSearchParams(searchString).get("lang") ?? Language.EN;

	useEffect(() => {
		if (
			!Object.values(Language as Record<string, string>).includes(
				langParam as Language
			)
		) {
			setLang(Language.EN);
			setLocation("?lang=en");
		} else {
			setLang(langParam as Language);
		}
	}, [langParam, searchString, setLocation]);

	return lang;
};
