import React from "react";
import { Project } from "../types";
import { Heading, Tags } from "./FormattedBlocks";
import { PiTrophyDuotone } from "react-icons/pi";

interface ProjectCardProps {
	project: Project;
	onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
	return (
		<div onClick={() => onClick(project)} className="group overflow-hidden box-lift relative">
			<img
				src={project.thumbnail}
				alt={project.title}
				className="aspect-[4/3] grayscale group-hover:grayscale-0 duration-700 w-full object-cover"
			/>

			<div className="py-4 px-8 space-y-4 border-t-[3px] border-current">
				<Heading project={project} />

				{project.tagline && (
					<p className="primary text-sm leading-relaxed line-clamp-4">{project.tagline}</p>
				)}

				{project.award && (
					<span className="text-icon">
						<PiTrophyDuotone size={22} title="Award Earned" />
						{project.award}
					</span>
				)}

				<Tags project={project} />
			</div>
		</div>
	);
};

export default ProjectCard;
