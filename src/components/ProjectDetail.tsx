import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Project } from "../types";
import { Github, Gamepad2, ExternalLink } from "lucide-react";
import GameEmbed from "./GameEmbed";

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

	const renderContent = (text: string) => {
		return text.split("\n").map((line, i) => {
			if (line.trim().startsWith("##")) {
				return (
					<h3 key={i} className="text-xl mb-6 text-slate-500">
						{line.replace("##", "").trim()}
					</h3>
				);
			} else if (line.trim().startsWith("#")) {
				return (
					<h3 key={i} className="text-2xl font-bold mb-6 text-slate-900">
						{line.replace("#", "").trim()}
					</h3>
				);
			} else if (line.trim().startsWith("-")) {
				return (
					<li key={i} className="ml-8 mb-2 list-disc">
						{line.replace("-", "").trim()}
					</li>
				);
			}
			return (
				<p key={i} className="mb-6 leading-relaxed">
					{line}
				</p>
			);
		});
	};

	const modalContent = (
		<div className="fixed z-20 inset-0 m-auto w-full max-w-6xl my-16 rounded-3xl flex flex-col shadow-2xl zoom-in border-4 border-black overflow-hidden bg-white">
			{/* Header */}
			<div
				className="flex items-center justify-between p-8 bg-black sticky top-0 box-interactable border-0 border-b-4 rounded-t-2xl"
				onClick={onClose}>
				<div className="space-y-1">
					<span className="text-[10px] font-bold uppercase tracking-[0.2em]">
						{project.category}
					</span>
					<h2 className="text-3xl font-bold text-white">{project.title}</h2>
				</div>
			</div>

			{/* Content Scroll Area */}
			<div className="px-4 lg:px-16 overflow-y-auto">
				<div className="max-w-4xl mx-auto space-y-20">
					{/* Main Visuals */}
					<div className="game-wrapper"></div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
						<div className="lg:col-span-2">
							<GameEmbed title={project.title} src={project.demoUrl} />
						</div>

						<div className="space-y-8">
							<div className="space-y-4">
								<h4 className="text-[10px] font-bold secondary uppercase tracking-[0.2em]">
									Connect & Launch
								</h4>
								<div className="flex flex-col gap-8">
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											className="flex items-center justify-between p-1 box-interactable">
											<span className="flex items-center gap-3 font-bold">
												<Github size={20} /> View Codebase
											</span>
											<ExternalLink size={20} />
										</a>
									)}
								</div>
							</div>

							<div className="space-y-4">
								<h4 className="text-[10px] font-bold secondary uppercase tracking-[0.2em]">
									Technologies
								</h4>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-4 py-1.5 bg-slate-50 rounded-full text-xs font-bold text-slate-700 border border-slate-100">
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	// This renders the modal at the top of the DOM, ignoring parent structure
	return createPortal(modalContent, document.body);
};

export default ProjectDetail;
