import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Project } from "../types";
import { FaGithub, FaCalendarDays, FaPalette, FaBriefcase } from "react-icons/fa6";
import GameEmbed from "./GameEmbed";
import { Heading, Tags, Writeup } from "./FormattedBlocks";

interface ProjectModalProps {
	project: Project;
	onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
	useEffect(() => {
		document.body.classList.add("overflow-hidden");

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.classList.remove("overflow-hidden");
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	const modalContent = (
		/* Blurred background */
		<div className="fixed z-20 bg-black/75 backdrop-blur inset-0 flex justify-center items-center">
			{/* Rounded shell of modal, clips contents */}
			<div className="size-auto bg-white border zoom-in overflow-hidden">
				{/* Layout container - NO overflow rules */}
				<div className="flex flex-col max-h-[90vh]">
					{/* Header */}
					<div
						className="py-4 px-8 box-interactable !rounded-none !border-x-0 !border-t-0"
						onClick={onClose}>
						<Heading project={project} />
					</div>
					{/* Scroll area */}
					<div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
						<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
							<div className="lg:col-span-3">
								<GameEmbed title={project.title} src={project.demoUrl} />
							</div>

							<div className="space-y-8 lg:col-span-2">
								<div className="space-y-2">
									<h4 className="secondary">Details</h4>
									<p className="text-icon">
										<FaBriefcase size={22} title="Event" />
										{project.event}
									</p>
									<p className="text-icon">
										<FaCalendarDays size={22} title="Date" />
										{project.start && `${project.start} - `}
										{project.end}
									</p>
									{project.theme && (
										<p className="text-icon">
											<FaPalette size={22} title="Theme" />“{project.theme}”
										</p>
									)}
								</div>

								<div className="space-y-4">
									<h4 className="secondary">Connect & Launch</h4>
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											className="box-interactable text-icon">
											View Codebase <FaGithub size={22} title="GitHub Repository" />
										</a>
									)}
								</div>

								<div className="space-y-4">
									<h4 className="secondary">Skills & Tools</h4>
									<Tags project={project} />
								</div>
							</div>
						</div>
						{project.writeup && <Writeup project={project} />}
					</div>
				</div>
			</div>
		</div>
	);

	// This renders the modal at the top of the DOM, ignoring parent structure
	return createPortal(modalContent, document.body);
};

export default ProjectModal;
