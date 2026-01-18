export type ProjectCategory = "Video Game" | "Web App" | "Software";

export type Heading = "Overview" | "My Role" | "My Challenges" | "What I Learned";

interface Section {
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
	webUrl?: string;
	codeUrl?: string;
	demoUrl?: string;
	tags: string[];
	award?: string;
}
