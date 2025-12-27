import { IconType } from "react-icons";

export type ProjectCategory = "Video Game" | "Web" | "Software";

export type Heading = "Overview" | "My Role" | "My Challenges" | "What I Learned"

export interface Section {
	heading: Heading;
	text: string;
}

export interface Project {
	title: string;
	event: string;
	theme?: string;
	start?: string;
	end: string;
	category: ProjectCategory;
	thumbnail: string;
	tagline?: string;
	writeup?: Section[];
	githubUrl?: string;
	demoUrl?: string;
	tags: string[];
	award?: string;
}

export type ActiveTab = "home" | "projects";
