import React from "react";
import { Project } from "../types";
import { LuGamepad2, LuGithub, LuTrophy } from "react-icons/lu";
import { Heading } from "./FormattedBlocks";

interface ProjectCardProps {
	project: Project;
	onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
	return (
		<div onClick={() => onClick(project)} className="group overflow-hidden box-interactable">
			<img
				src={project.thumbnail}
				alt={project.title}
				className="aspect-[4/3] grayscale group-hover:grayscale-0 transition-all duration-700 w-full object-cover"
			/>

			<div className="py-4 px-8 space-y-4 border-t-4 border-current">
				<Heading project={project} />

				<p className="text-white text-sm leading-relaxed line-clamp-2 font-medium">
					{project.tagline}
				</p>

				<div className="flex flex-wrap gap-2 pt-2">
					{project.tags.map((tag) => (
						<span
							key={tag}
							className="px-3 py-1 bg-slate-100 text-xs font-bold rounded-full text-slate-600 border-2 border-slate-800">
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
