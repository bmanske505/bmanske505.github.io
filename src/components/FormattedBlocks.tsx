import { Project } from "../types";
import { IconMap } from "../constants";
import { FaGithub, FaItchIo, FaLinkedin, FaAward, FaPoop } from "react-icons/fa6";

interface ProjectProps {
	project: Project;
}

interface DivProps {
	className?: string;
}

export const Tags: React.FC<ProjectProps> = ({ project }) => {
	return (
		<div className="flex flex-wrap gap-2">
			{project.tags.map((tag) => (
				<span
					key={tag}
					className="px-3 py-1 bg-slate-100 text-xs font-bold rounded-full text-slate-600 border-2 border-slate-800">
					{tag}
				</span>
			))}
		</div>
	);
};

export const Heading: React.FC<ProjectProps> = ({ project }) => {
	return (
		<div className="space-y-1">
			<div className="spaced-out">{project.category}</div>
			<h3 className="text-2xl font-bold primary">{project.title}</h3>
			{project.award && (
				<span className="text-icon">
					<FaAward size={22} title="Award Earned" />
					{project.award}
				</span>
			)}
		</div>
	);
};

export const Socials: React.FC<DivProps> = ({ className }) => {
	return (
		<div className={`flex justify-around ${className ?? ""}`}>
			<a
				href="https://www.linkedin.com/in/brady-manske/"
				target="_blank"
				className="text-interactable">
				<FaLinkedin size={25} title="LinkedIn Profile" />
			</a>
			<a href="https://github.com/bmanske505" target="_blank" className="text-interactable">
				<FaGithub size={25} title="GitHub Profile" />
			</a>
			<a href="https://state0fflux.itch.io" target="_blank" className="text-interactable">
				<FaItchIo size={25} title="Itch.io Profile" />
			</a>
		</div>
	);
};

type ContentBlock = { type: "paragraph"; text: string } | { type: "list"; items: string[] };

function parseTextToBlocks(text: string): ContentBlock[] {
	const lines = text.split("\n").map((l) => l.trim());

	const blocks: ContentBlock[] = [];
	let currentList: string[] = [];

	const flushList = () => {
		if (currentList.length) {
			blocks.push({ type: "list", items: currentList });
			currentList = [];
		}
	};

	for (const line of lines) {
		if (!line) continue;

		// list item
		if (line.startsWith("-")) {
			currentList.push(line.replace(/^-+/, "").trim());
			continue;
		}

		// normal text
		flushList();
		blocks.push({ type: "paragraph", text: line });
	}

	flushList();
	return blocks;
}

export const Writeup: React.FC<ProjectProps> = ({ project }) => {
	if (!project.writeup) return null;

	return (
		<div className="columns-1 lg:columns-2 mt-8">
			{project.writeup.map((section) => {
				if (!section.text) return;
				const blocks = parseTextToBlocks(section.text);
				const Icon = IconMap.get(section.heading);

				return (
					<div className="break-inside-avoid p-5 flex flex-col gap-4">
						<h4 className="text-2xl capitalize tracking-normal text-icon">
							{Icon && <Icon size={22} title={section.heading} />}
							{section.heading}
						</h4>

						{blocks.map((block) => {
							if (block.type === "paragraph") {
								return <p>{block.text}</p>;
							}

							if (block.type === "list") {
								return (
									<ul className="space-y-4">
										{block.items.map((item, k) => (
											<li>{item}</li>
										))}
									</ul>
								);
							}

							return null;
						})}
					</div>
				);
			})}
		</div>
	);
};
