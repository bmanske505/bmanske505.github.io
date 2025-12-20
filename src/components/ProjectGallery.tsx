import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { Project, ProjectCategory } from "../types";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const ProjectGallery: React.FC = () => {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [filter, setFilter] = useState<ProjectCategory | "All">("All");

	const filteredProjects =
		filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

	const categories: (ProjectCategory | "All")[] = ["All", "Game", "Software", "Web"];

	return (
		<div className="space-y-16 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
			<div className="flex flex-col items-center text-center space-y-8">
				<div className="space-y-2">
					<h2 className="text-4xl font-black text-slate-900">My Projects</h2>
					<p className="text-slate-500 max-w-xl mx-auto">
						A deep dive into some of my favorite technical challenges and creative explorations.
					</p>
				</div>

				<div className="flex items-center gap-16 px-4 py-2 backdrop-blur bg-black/25 border-4 border-black rounded-full overflow-x-auto no-scrollbar">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setFilter(cat)}
							className={`px-6 py-2 text-sm text-interactable ${filter === cat ? "active" : ""}`}>
							{cat.toUpperCase()}
						</button>
					))}
				</div>
			</div>

			{filteredProjects.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{filteredProjects.map((project) => (
						<ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
					))}
				</div>
			) : (
				<div className="h-64 flex flex-col items-center justify-center text-slate-400 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
					<p className="font-medium">Stay tuned! More projects coming soon.</p>
				</div>
			)}

			{selectedProject && (
				<ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
			)}
		</div>
	);
};

export default ProjectGallery;
