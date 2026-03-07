import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Project } from "../types";
import { Heading, PhotoCarousel, Tags, Writeup } from "./FormattedBlocks";
import { DefaultIconClosed, DefaultIconOpen } from "../constants";
import {
	PiBriefcaseDuotone,
	PiCalendarDotsDuotone,
	PiGithubLogoDuotone,
	PiGitlabLogoDuotone,
	PiTrophyDuotone,
	PiPaintBrushDuotone,
	PiArrowSquareOutDuotone,
	PiGithubLogoFill,
	PiGitlabLogoFill,
	PiArrowSquareOutFill,
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
								<div className="order-1 lg:order-none hidden lg:block lg:col-span-3 aspect-video overflow-hidden border">
									{project.demoUrl && (
										<iframe
											className="size-full"
											src={project.demoUrl}
											allowFullScreen
											loading="lazy"
											title={project.title}
										/>
									)}
								</div>
							</div>

							<div className="order-2 lg:order-none lg:col-span-2 lg:row-span-2 space-y-8">
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
								{(project.codeUrl || (project.demoUrl && project.category == "Web App")) && (
									<div className="space-y-4">
										<h4 className="secondary">Connect & Launch</h4>
										<div className="flex flex-wrap gap-4">
											{project.demoUrl && project.category == "Web App" && (
												<span className="box-depress">
													<a href={project.demoUrl} target="_blank" className="text-icon">
														<PiArrowSquareOutDuotone
															className="icon-closed"
															size={22}
															title="Webpage"
														/>
														<PiArrowSquareOutFill className="icon-open" size={22} title="Webpage" />
														Visit Webpage
													</a>
												</span>
											)}
											{project.codeUrl && (
												<span className="box-depress">
													{project.codeUrl.includes("github") ? (
														<a href={project.codeUrl} target="_blank" className="text-icon">
															<PiGithubLogoDuotone
																className="icon-closed"
																size={22}
																title="GitHub Repository"
															/>
															<PiGithubLogoFill
																className="icon-open"
																size={22}
																title="GitHub Repository"
															/>
															View Codebase
														</a>
													) : project.codeUrl.includes("gitlab") ? (
														<a href={project.codeUrl} target="_blank" className="text-icon">
															<PiGitlabLogoDuotone
																className="icon-closed"
																size={22}
																title="GitLab Repository"
															/>
															<PiGitlabLogoFill
																className="icon-open"
																size={22}
																title="GitLab Repository"
															/>
															View Codebase
														</a>
													) : (
														<a href={project.codeUrl} target="_blank" className="text-icon">
															<DefaultIconClosed
																className="icon-closed"
																size={22}
																title="Codebase"
															/>
															<DefaultIconOpen className="icon-open" size={22} title="Codebase" />
															View Codebase
														</a>
													)}
												</span>
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
								<PhotoCarousel className="col-span-12" project={project} />
							</div>
							<Writeup className="order-3 lg:order-none lg:col-span-3" project={project} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	// This renders the modal at the top of the DOM, ignoring parent structure
	return createPortal(modalContent, document.body);
};

export default ProjectModal;
