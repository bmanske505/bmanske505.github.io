import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Project } from "../types";
import { Heading, Tags, Writeup } from "./FormattedBlocks";
import { DefaultIcon } from "../constants";
import {
	PiBriefcaseDuotone,
	PiCalendarDotsDuotone,
	PiGithubLogoDuotone,
	PiGitlabLogoDuotone,
	PiTrophyDuotone,
	PiPaintBrushDuotone,
	PiArrowSquareOutDuotone,
} from "react-icons/pi";

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
			<div className="bg-primary border border-secondary zoom-in overflow-hidden">
				{/* Layout container - NO overflow rules */}
				<div className="flex flex-col max-h-[90vh] max-w-screen-xl">
					{/* Header */}
					<div
						className="py-4 px-8 box-lift !rounded-none !border-x-0 !border-t-0"
						onClick={onClose}>
						<Heading project={project} />
					</div>
					{/* Scroll area */}
					<div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
						<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
							<div className="lg:col-span-3">
								<div className="aspect-video overflow-hidden border">
									{project.demoUrl ? (
										<iframe
											className="size-full"
											src={project.demoUrl}
											allowFullScreen
											loading="lazy"
											title={project.title}
										/>
									) : (
										project.webUrl && (
											<a href={project.webUrl} target="_blank">
												<img
													className="size-full m-auto object-cover"
													src={project.thumbnail}
													title={project.title}
												/>
											</a>
										)
									)}
								</div>
							</div>

							<div className="space-y-8 lg:col-span-2">
								<div className="space-y-2">
									<h4 className="secondary">Details</h4>
									<p className="text-icon">
										<PiBriefcaseDuotone size={22} title="Event" />
										{project.event}
									</p>
									<p className="text-icon">
										<PiCalendarDotsDuotone size={22} title="Date" />
										{project.start && `${project.start} - `}
										{project.end}
									</p>
									{project.award && (
										<p className="text-icon">
											<PiTrophyDuotone size={22} title="Award Earned" />
											{project.award}
										</p>
									)}
									{project.theme && (
										<p className="text-icon">
											<PiPaintBrushDuotone size={22} title="Theme" />“{project.theme}”
										</p>
									)}
								</div>
								{(project.codeUrl || project.webUrl) && (
									<div className="space-y-4">
										<h4 className="secondary">Connect & Launch</h4>
										<div className="flex flex-wrap gap-4">
											{project.webUrl && (
												<a href={project.webUrl} target="_blank" className="box-depress text-icon">
													<span>Visit Webpage</span>
													<PiArrowSquareOutDuotone size={22} title="Webpage" />
												</a>
											)}
											{project.codeUrl && (
												<a href={project.codeUrl} target="_blank" className="box-depress text-icon">
													<span>View Codebase</span>
													{project.codeUrl.includes("github") ? (
														<PiGithubLogoDuotone size={22} title="GitHub Repository" />
													) : project.codeUrl.includes("gitlab") ? (
														<PiGitlabLogoDuotone size={22} title="GitLab Repository" />
													) : (
														<DefaultIcon size={22} title="Codebase" />
													)}
												</a>
											)}
										</div>
									</div>
								)}
								{project.tags.length > 0 && (
									<div className="space-y-4">
										<h4 className="secondary">Skills & Tools</h4>
										<Tags project={project} />
									</div>
								)}
							</div>
						</div>
						<Writeup project={project} />
					</div>
				</div>
			</div>
		</div>
	);

	// This renders the modal at the top of the DOM, ignoring parent structure
	return createPortal(modalContent, document.body);
};

export default ProjectModal;
