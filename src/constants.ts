import { IconType } from "react-icons";
import { Project, Heading, ProjectCategory } from "./types";

import {
	PiBookOpenDuotone,
	PiGameControllerDuotone,
	PiGameControllerFill,
	PiGearDuotone,
	PiGearFineDuotone,
	PiGearFineFill,
	PiGlobeDuotone,
	PiGlobeFill,
	PiPlantDuotone,
	PiPuzzlePieceDuotone,
	PiSquareDuotone,
	PiSquareFill,
	PiSquaresFourDuotone,
	PiSquaresFourFill,
} from "react-icons/pi";

export const HeadingIcons: Record<Heading, IconType> = {
	Overview: PiBookOpenDuotone,
	"My Role": PiGearDuotone,
	"My Challenges": PiPuzzlePieceDuotone,
	"What I Learned": PiPlantDuotone,
};

export const CategoryIcons: Record<ProjectCategory | "All", [IconType, IconType]> = {
	All: [PiSquaresFourDuotone, PiSquaresFourFill],
	"Video Game": [PiGameControllerDuotone, PiGameControllerFill],
	Software: [PiGearFineDuotone, PiGearFineFill],
	"Web App": [PiGlobeDuotone, PiGlobeFill],
};

export const DefaultIcon: [IconType, IconType] = [PiSquareDuotone, PiSquareFill];
export const DefaultIconClosed: IconType = DefaultIcon[0];
export const DefaultIconOpen: IconType = DefaultIcon[1];

export const PROJECTS: Project[] = [
	{
		title: "Escape the Forest",
		event: "UW CSE 481: Games Capstone",
		start: "January 2026",
		end: "March 2026",
		category: "Video Game",
		thumbnail: "https://img.itch.zone/aW1nLzI1OTA4NzY5LnBuZw==/315x250%23c/jiVIXx.png",
		tagline: "Guide your sibling through the woods and survive the night.",
		codeUrl: "https://github.com/bmanske505/Escape-The-Forest",
		demoUrl: "https://itch.io/embed-upload/16537285?color=000000",
		tags: ["Unity", "Firebase", "CI/CD", "Agile", "Prototyping", "AI", "Analytics"],
		writeup: [
			{
				heading: "Overview",
				text: `A quarter-long game development capstone built with a partner under an Agile workflow. Shipped iteratively across multiple sprints with consistent delivery and scope management.`,
			},
			{
				heading: "My Role",
				text: `
        - Built core gameplay systems including procedural maze generation, enemy AI navigation, inventory management, and cross-session save states.
        - Integrated Firebase for live analytics and designed A/B tests to validate design decisions with real player data.
        `,
			},
			{
				heading: "My Challenges",
				text: `Balancing a high-intensity sprint schedule alongside a demanding course load. Used Trello to divide responsibilities and keep progress visible, which kept us on track without sacrificing quality.`,
			},
			{
				heading: "What I Learned",
				text: `
        - Gained hands-on experience with data-driven iteration, collecting player behavior data, identifying friction points, and shipping targeted improvements in response.
        - Strengthened my understanding of CI/CD and multi-developer workflows.`,
			},
		],
		photos: [
			{
				src: "./title-1.0.png",
				caption: "Title screen - Release 1.0",
			},
			{
				src: ".//title-1.1.png",
				caption: "Reworked title screen - Release 1.1",
			},
			{
				src: "./gameplay-1.0.png",
				caption: "Gameplay - Release 1.0",
			},
			{
				src: "./gameplay-1.1.png",
				caption: "Reworked gameplay - Release 1.1",
			},
			{
				src: "./time-graph-1.0.png",
				caption: "Gameplay time graph created from user analytics - Release 1.0",
			},
			{
				src: "./flashlight-graph-1.0.png",
				caption: "Flashlight use graph created from user analytics - Release 1.0",
			},
		],
	},
	{
		title: "WNS Visualization",
		event: "UW CSE 457: Data Visualization Final",
		end: "December 2025",
		category: "Web App",
		thumbnail: "https://invasive-species-6ebd34.pages.cs.washington.edu/images/wns.jpg",
		tagline:
			"Bats play a crucial role in our environment, but recently a species of fungus has been decimating their numbers.",
		demoUrl: "https://invasive-species-6ebd34.pages.cs.washington.edu/",
		codeUrl: "https://gitlab.cs.washington.edu/cse442/25au/fp/invasive-species",
		writeup: [
			{
				heading: "Overview",
				text: `An interactive data visualization on the impact of white-nose syndrome on North American bat populations, built as a final project for CSE 457: Data Visualization.`,
			},
			{
				heading: "My Role",
				text: `
        - Sourced and cleaned population datasets using Python’s pandas library.
        - Established a shared data schema that unblocked parallel front-end development.
        - Built the responsive layout in HTML/CSS/Bootstrap and implemented interactive D3.js visualizations.
        `,
			},
			{
				heading: "My Challenges",
				text: `A government shutdown limited dataset access mid-project. Resolved it by defining a clean schema with a sample dataset early, letting the team build ahead while I backfilled real data. Later optimized D3 update logic to process incremental data batches, significantly improving interaction performance under larger datasets.`,
			},
			{
				heading: "What I Learned",
				text: `
        - Reinforced the value of early schema design in team projects.
        - Gained practical experience optimizing D3 for performance and developed a clearer sense of Bootstrap’s strengths and limitations in responsive layout work.`,
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
				text: `A narrative-driven Unity game built during the UW Game Dev Club jam with a team of three, placing 3rd overall.`,
			},
			{
				heading: "My Role",
				text: `Led programming as the most experienced developer on the team.
        - Designed progression systems, unlockable content, and dynamic menus.
        - Structured the codebase with modular C# scripts to keep overlapping systems maintainable.
        - Mentored junior teammates in Unity, programming, and asset creation throughout the jam.
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
				text: `A solo game jam entry developed over two weeks for the Imaginary Game Jam, winning Community Favorite.`,
			},
			{
				heading: "My Role",
				text: `Solely responsible for all programming, design, and content.
        - Built player controls, combat systems, enemy wave logic, and event-driven progression.
        - Used ScriptableObjects for a data-driven architecture that made balancing fast without code changes.
        - Iterated on difficulty and controls based on playtester feedback across multiple rounds before submission.
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
		event: "UW CSE 457: Computer Graphics Final",
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
				text: `A 3D scavenger-hunt game built over four weeks with a team of three for CSE 457: Computer Graphics. Placed 1st in the class competition.`,
			},
			{
				heading: "My Role",
				text: `
        - Implemented procedural forest generation with terrain-aware object placement.
        - Designed responsive UI for cutscenes and inventory.
        - Integrated third-party assets strategically to maintain iteration speed without sacrificing visual quality.
        `,
			},
			{
				heading: "My Challenges",
				text: `First experience working in 3D, requiring fast ramp-up on meshes, animations, and environment assets under a real deadline. Balanced learning new tools while maintaining steady team output.`,
			},
			{
				heading: "What I Learned",
				text: `
        - Deepened collaborative development skills: code reviews, branching strategy, and merging across a team in GitHub.
        - Gained experience using storyboarding and prototyping as structured design tools to guide a project from concept to polished final product.`,
			},
		],
		tags: ["Unity", "C#", "3D", "Teamwork"],
		award: "1st Place",
	},
];
