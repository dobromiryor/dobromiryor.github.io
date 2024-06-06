import { type Language } from "../enums/language.enum";
import { type SectionType } from "../enums/section.enum";
import { type SideSectionType } from "../enums/side-section.enum";

type PersonalDetails = {
	firstName: string;
	lastName: string;
	city: string;
	country: string;
	website: string;
	email: string;
	phone: string;
	position: string;
};

type Experience = {
	company: string;
	position: string;
	period: string;
	tasks: string[];
	location: string;
};

type Education = {
	field: string;
	period: string;
	school: string;
	location: string;
};

type Section =
	| {
			title: string;
			type: SectionType.EXPERIENCE;
			list: Experience[];
	  }
	| {
			title: string;
			type: SectionType.EDUCATION;
			list: Education[];
	  };

type SideSection = {
	title: string;
	type: SideSectionType;
	list: string[];
};

export interface CVs {
	en: CV;
	bg: CV;
}

export interface CV {
	lang: Language;
	personalDetails: PersonalDetails;
	sections: Section[];
	sideSection: SideSection[];
}
