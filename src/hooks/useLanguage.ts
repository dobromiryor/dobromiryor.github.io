import { useEffect, useState } from "react";
import { useLocation, useParams } from "wouter";

import { Language } from "../enums/language.enum";

export const useLanguage = () => {
	const [lang, setLang] = useState(Language.EN);

	const [_, navigate] = useLocation();
	const { lang: langParam } = useParams<{ lang: string }>();

	useEffect(() => {
		if (
			!Object.values(Language as Record<string, string>).includes(langParam)
		) {
			setLang(Language.EN);
			navigate(`/cv/${Language.EN}`);
		} else {
			setLang(langParam as Language);
		}
	}, [langParam, navigate]);

	return lang;
};
