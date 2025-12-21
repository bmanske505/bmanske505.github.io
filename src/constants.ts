import { Project } from "./types";

export const PROJECTS: Project[] = [
	{
		id: "crusts-bakery",
		title: "Crust's Bakery",
		category: "Video Game",
		thumbnail: "https://img.itch.zone/aW1nLzIzNzI1MjUwLnBuZw==/315x250%23c/fJX9Ap.png",
		shortDescription: "Short tagline",
		longWriteup: `
      # Heading 1
      ## Heading 2
      - Bullet 1
      - Bullet 2
      Writeup
    `,
		githubUrl: "https://github.com/State0fFlux/crusts-bakery",
		demoUrl: "https://itch.io/embed-upload/15322444?color=edd6ac",
		images: [],
		tags: ["Unity", "C#"],
		// award: "3rd Place"
	},
	{
		id: "kindling",
		title: "Kindling",
		category: "Video Game",
		thumbnail: "https://img.itch.zone/aW1nLzIxOTU2NTg2LnBuZw==/315x250%23c/kTiFuJ.png",
		shortDescription: "Short tagline",
		longWriteup: `
      # Heading 1
      ## Heading 2
      Writeup
    `,
		githubUrl: "https://github.com/State0fFlux/Kindling",
		demoUrl: "https://itch.io/embed-upload/15906793?color=382f27",
		images: [],
		tags: ["Unity", "C#"],
		// award: "Community Favorite"
	},
	{
		id: "bug-hunt",
		title: "Bug Hunt",
		category: "Video Game",
		thumbnail: "https://img.itch.zone/aW1nLzIxNjI4ODU5LnBuZw==/315x250%23c/Nocoo%2F.png",
		shortDescription: "Short tagline",
		longWriteup: `
      # Heading 1
      ## Heading 2
      Writeup
    `,
		githubUrl: "https://github.com/State0fFlux/Bug-Hunt",
		demoUrl: "https://itch.io/embed-upload/15906853?color=5b6b2c",
		images: [],
		tags: ["Unity", "C#"],
		// award: "1st Place"
	},
];

/*

TO ADD:
- trophy (print with an award icon and text next to it)
- array of objects with title, array of images (LHS), & text (RHS) (for devlogs / process, that can be side)
- date / time period
*/
