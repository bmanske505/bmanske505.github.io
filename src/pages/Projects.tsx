import React, { useState } from "react";
import { CategoryIcons, DefaultIcon, PROJECTS } from "../constants";
import { Project, ProjectCategory } from "../types";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

import { useSearchParams } from "react-router-dom";
import { IconType } from "react-icons";

const Projects: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const selectedTitle = searchParams.get("title");
	const selectedCategory = searchParams.get("category") as ProjectCategory;

	const selectedProject: Project | undefined = PROJECTS.find((p) => p.title === selectedTitle);

	const filteredProjects = selectedCategory
		? PROJECTS.filter((p) => p.category === selectedCategory)
		: PROJECTS;

	const monthOrder: Record<string, number> = {
		January: 1,
		February: 2,
		March: 3,
		April: 4,
		May: 5,
		June: 6,
		July: 7,
		August: 8,
		September: 9,
		October: 10,
		November: 11,
		December: 12,
	};

	const parseEnd = (end: string): number => {
		if (end === "Present") return Infinity;
		const [month, year] = end.split(" ");
		return parseInt(year) * 100 + monthOrder[month];
	};

	const categories: (ProjectCategory | "All")[] = [
		"All",
		...Array.from(
			new Set(
				PROJECTS.sort((a: Project, b: Project) => parseEnd(b.end) - parseEnd(a.end)).map(
					(p) => p.category,
				),
			),
		),
	];

	return (
		<div className="space-y-8 py-16 fade-in">
			<div className="flex flex-col items-center text-center space-y-8">
				<div className="space-y-2">
					<h1 className="text-3xl">My Projects</h1>
					<p>
						A deep dive into some of my favorite technical challenges and creative explorations.
					</p>
				</div>

				{categories.length > 2 && (
					<div className="flex flex-wrap justify-center items-center gap-8">
						{categories.map((cat) => {
							const Icons: [IconType, IconType] = CategoryIcons[cat] ?? DefaultIcon;
							const IconClosed = Icons[0];
							const IconOpen = Icons[1];

							return (
								<button
									key={cat}
									onClick={() => {
										setSearchParams((prev) => {
											const params = new URLSearchParams(prev);
											if (cat === "All") {
												params.delete("category");
											} else {
												params.set("category", cat);
											}
											return params;
										});
									}}
									className={`text-xs lg:text-sm box-depress radio ${(cat === "All" && selectedCategory === null) || selectedCategory === cat ? "active" : ""}`}>
									<span className="text-icon">
										<IconClosed className="icon-closed" size={22} title="Award Earned" />
										<IconOpen className="icon-open" size={22} title="Award Earned" />
										{cat.toUpperCase()}
									</span>
								</button>
							);
						})}
					</div>
				)}
			</div>

			{filteredProjects.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{filteredProjects.map((project) =>
						selectedProject == project ? (
							<div></div>
						) : (
							<ProjectCard
								key={project.title}
								project={project}
								onClick={() => {
									setSearchParams((prev) => {
										const params = new URLSearchParams(prev);
										params.set("title", project.title);
										return params;
									});
								}}
							/>
						),
					)}
				</div>
			) : (
				<div className="h-64 flex flex-col items-center justify-center milky border primary border-dashed">
					<p className="text-xl">Stay tuned! More projects coming soon.</p>
				</div>
			)}

			{selectedProject && (
				<ProjectModal
					project={selectedProject}
					onClose={() =>
						setSearchParams((prev) => {
							const params = new URLSearchParams(prev);
							params.delete("title");
							return params;
						})
					}
				/>
			)}
		</div>
	);
};

export default Projects;
