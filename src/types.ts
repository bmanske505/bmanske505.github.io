export type ProjectCategory = "Video Game" | "Web" | "Software";

export interface Project {
  title: string;
  start?: string;
  end: string;
	category: ProjectCategory;
	thumbnail: string;
	tagline: string;
	writeup?: string;
	githubUrl?: string;
	demoUrl?: string;
	images: string[];
	tags: string[];
	award?: string;
	techStack?: Record<string, string[]>;
}

export type ActiveTab = "home" | "projects";
