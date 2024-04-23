import { type Tech } from "./tech.type";

type Credit = {
	text: string;
	name: string;
	url: string;
};

export interface Project {
	title: string;
	description: string;
	credits: Credit[];
	url: string;
	stack: Tech[];
}
