import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Project } from "../types";
import { Github, ExternalLink } from "lucide-react";
import GameEmbed from "./GameEmbed";
import { Heading, Writeup } from "./FormattedBlocks";

interface ProjectDetailProps {
	project: Project;
	onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
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
		<div className="border fixed z-20 inset-0 w-full m-auto flex flex-col zoom-in overflow-hidden bg-white">
			{/* Header */}
			<div
				className="py-4 px-8 sticky top-0 box-interactable !rounded-none !border-x-0 !border-t-0"
				onClick={onClose}>
				<Heading project={project} />
			</div>

			{/* Content Scroll Area */}
			<div className="px-4 lg:px-16 overflow-y-auto">
				<div className="mx-auto my-8 space-y-16">
					{/* Main Visuals */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						<div className="lg:col-span-2">
							<GameEmbed title={project.title} src={project.demoUrl} />
						</div>

						<div className="space-y-8">
							<div className="space-y-4">
								<h4 className="secondary">Connect & Launch</h4>
								<div className="flex flex-col gap-8">
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											className="w-fit p-2 box-interactable">
											<span className="flex justify-center items-center gap-3 font-bold">
												<Github size={20} /> View Codebase <ExternalLink size={20} />
											</span>
										</a>
									)}
								</div>
							</div>

							<div className="space-y-4">
								<h4 className="secondary">Technologies</h4>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-4 py-1.5 bg-slate-600 rounded-full text-xs font-bold text-slate-100 border-2 border-slate-800">
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				{project.writeup && <Writeup project={project} />}
			</div>
		</div>
	);

	// This renders the modal at the top of the DOM, ignoring parent structure
	return createPortal(modalContent, document.body);
};

export default ProjectDetail;
