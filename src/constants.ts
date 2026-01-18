import { IconType } from "react-icons";
import { Project, Heading, ProjectCategory } from "./types";

import {
	PiBookOpenDuotone,
	PiGameControllerDuotone,
	PiGearDuotone,
	PiGearFineDuotone,
	PiGlobeDuotone,
	PiPlantDuotone,
	PiPuzzlePieceDuotone,
	PiSquareDuotone,
	PiSquaresFourDuotone,
} from "react-icons/pi";
import { AndroidLogo } from "phosphor-react";

export const HeadingIcons: Record<Heading, IconType> = {
	Overview: PiBookOpenDuotone,
	"My Role": PiGearDuotone,
	"My Challenges": PiPuzzlePieceDuotone,
	"What I Learned": PiPlantDuotone,
};

export const CategoryIcons: Record<ProjectCategory | "All", IconType> = {
	All: PiSquaresFourDuotone,
	"Video Game": PiGameControllerDuotone,
	Software: PiGearFineDuotone,
	"Web App": PiGlobeDuotone,
};

export const DefaultIcon: IconType = PiSquareDuotone;

export const PROJECTS: Project[] = [
	{
		title: "WNS Visualization",
		event: "UW Data Visualization Final",
		end: "December 2025",
		category: "Web App",
		thumbnail: "./wns-webpage.png",
		//thumbnail: "https://invasive-species-6ebd34.pages.cs.washington.edu/images/wns.jpg",
		tagline:
			"Bats play a crucial role in our environment, but recently a species of fungus has been decimating their numbers.",
		webUrl: "https://invasive-species-6ebd34.pages.cs.washington.edu/",
		codeUrl: "https://gitlab.cs.washington.edu/cse442/25au/fp/invasive-species",
		writeup: [
			{
				heading: "Overview",
				text: `This project is an interactive data visualization highlighting the impact of white-nose syndrome, a fungal disease that has devastated bat populations across the United States. The goal was to raise awareness by making population decline trends explorable and understandable to a general audience.`,
			},
			{
				heading: "My Role",
				text: `I took on multiple responsibilities to support both the data and front-end aspects of the project, including:
        - Sourcing bat population and fungal spread data from ScienceBase and related public datasets
        - Cleaning, normalizing, and aggregating raw data using Python and Pandas
        - Translating design mockups into a responsive visualization layout using HTML, CSS, and Bootstrap
        - Implementing interactive visualizations and UI controls in D3.js`,
			},
			{
				heading: "My Challenges",
				text: `Reliable and consistent population data was difficult to obtain due to a government shutdown that limited access to monitored data requests. Additionally, population estimates varied significantly depending on measurement methodology. To address this, I began with a small, well-defined sample dataset and established a consistent schema with key fields used across all visualizations. This allowed the rest of the team to proceed with D3 development while I worked backwards to integrate real-world data.
        
        Additionally, as the dataset grew, we observed noticeable performance issues during slider interactions due to repeated full re-renders of large numbers of SVG elements. To improve responsiveness, I refactored the D3 update logic to operate on incremental batches of datapoints rather than re-rendering the entire dataset on each interaction. This significantly reduced unnecessary DOM updates and resulted in smoother, more responsive user interactions.`,
			},
			{
				heading: "What I Learned",
				text: `This project strengthened my understanding of responsive layout systems like Bootstrap and highlighted both its strengths and limitations. I also gained practical experience optimizing D3 visualizations for performance, reinforcing the importance of efficient update patterns and thoughtful data handling in interactive visual systems.`,
			},
		],
		tags: ["D3.js", "Bootstrap", "HTML", "Pandas"],
	},
	{
		title: "Crust’s Bakery",
		event: "UW Game Dev Club Jam",
		theme: "Companion",
		end: "October 2025",
		category: "Video Game",
		thumbnail: "https://img.itch.zone/aW1nLzIzNzI1MjUwLnBuZw==/315x250%23c/fJX9Ap.png",
		tagline: "It’s not just about the bread you make; it’s about who you share it with!",
		codeUrl: "https://github.com/bmanske505/crusts-bakery",
		demoUrl: "https://itch.io/embed-upload/15322444?color=000000",
		writeup: [
			{
				heading: "Overview",
				text: `This game was developed during the Game Dev Club jam at the University of Washington. Collaborating with a creative team of 3, I took on a valuable mentor role, supporting developers new to game dev in programming and asset creation.`,
			},
			{
				heading: "My Role",
				text: `
        As the lead programmer of a junior team, I played a critical role in supporting the team and building the project's technical structure:
        - Designed and implemented game progression systems, unlockable content, and dynamic menus to support a narrative-driven experience
        - Structured modular, maintainable C# scripts to manage overlapping game logic, player abilities, and companion interactions
        - Mentored new team members in programming, art, and level design, providing technical guidance and collaborative support

        `,
			},
			{
				heading: "My Challenges",
				text: ``,
			},
			{
				heading: "What I Learned",
				text: ``,
			},
		],
		tags: ["Unity", "C#", "Leadership"],
		award: "3rd Place",
	},
	{
		title: "Kindling",
		event: "Imaginary Game Jam",
		theme: "Fantasy & Fleshpit",
		end: "July 2025",
		category: "Video Game",
		thumbnail: "https://img.itch.zone/aW1nLzIxOTU2NTg2LnBuZw==/315x250%23c/kTiFuJ.png",
		tagline: "Defend warmth against a world gone cold.",
		codeUrl: "https://github.com/bmanske505/Kindling",
		demoUrl: "https://itch.io/embed-upload/15906793?color=000000",
		writeup: [
			{
				heading: "Overview",
				text: `This game was developed over a 2-week-long game jam exclusive to solo developers.`,
			},
			{
				heading: "My Role",
				text: `
        As a solo developer, I was in charge of creating literally everything you see in the final product! Here are some of my technical highlights:
        - Built core gameplay systems including player controllers, combat logic, enemy waves, and event-driven game progression
        - Designed flexible, data-driven architectures using ScriptableObjects to allow rapid content iteration without code changes
        - Iterated on playtester feedback to rebalance difficulty and improve player controls, prioritizing smooth gameplay
        - Implemented coroutines and optimized runtime performance to maintain responsive and consistent frame rates
        `,
			},
			{
				heading: "My Challenges",
				text: ``,
			},
			{
				heading: "What I Learned",
				text: ``,
			},
		],
		tags: ["Unity", "C#", "Solo"],
		award: "Community Favorite",
	},
	{
		title: "Bug Hunt",
		event: "UW Computer Graphics Final",
		start: "May 2025",
		end: "June 2025",
		category: "Video Game",
		thumbnail: "https://img.itch.zone/aW1nLzIxNjI4ODU5LnBuZw==/315x250%23c/Nocoo%2F.png",
		tagline: "Collect bugs to earn your Bug-Catching Badge and impress your scout leader!",
		codeUrl: "https://github.com/bmanske505/Bug-Hunt",
		demoUrl: "https://itch.io/embed-upload/15906853?color=000000",
		writeup: [
			{
				heading: "Overview",
				text: `This game was developed for CSE 457: Computer Graphics at the University of Washington. Collaborating with a team of 3 over the course of 4 weeks, I built a 3D scavenger-hunt game in Unity, ultimately earning first place in the class competition.`,
			},
			{
				heading: "My Role",
				text: `
        As the lead programmer, I was responsible for designing and implementing core gameplay systems, including:
        - A procedural forest generator with terrain-aware object placement to create a dynamic environment
        - Responsive UI systems to support cutscenes, guide player objectives, and reflect inventory state
        - Player movement, interaction triggers, and camera behavior designed to support a smooth and engaging gameplay loop
        `,
			},
			{
				heading: "My Challenges",
				text: `This was my first large-scale project working in 3D, which meant learning to work with meshes, animations, and environment assets effectively. A key challenge was balancing visual fidelity of 3D assets with iteration speed, especially while learning 3D workflows for the first time. To streamline production, I integrated assets from Mixamo and the Unity Asset Store, allowing us to prototype quickly while still building a cohesive visual experience.`,
			},
			{
				heading: "What I Learned",
				text: `This project strengthened my experience with collaborative development, particularly with using GitHub for version control, code reviews, and merging contributions across the team. I also gained experience in more structured, long-term project management, utilizing storyboarding and prototyping to iterate on an idea and turn it into a polished game.`,
			},
		],
		tags: ["Unity", "C#", "3D", "Teamwork"],
		award: "1st Place",
	},
];
