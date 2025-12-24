import { Project } from "../types";
import { FaGithub, FaItchIo, FaLinkedin, FaTrophy } from "react-icons/fa6";

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
			<h3 className="text-2xl font-bold text-white">{project.title}</h3>
			{project.award && (
				<span className="text-icon">
					<FaTrophy size={22} title="Award Earned" />
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
			<a href="https://github.com/State0fFlux" target="_blank" className="text-interactable">
				<FaGithub size={25} title="GitHub Profile" />
			</a>
			<a href="https://state0fflux.itch.io" target="_blank" className="text-interactable">
				<FaItchIo size={25} title="Itch.io Profile" />
			</a>
		</div>
	);
};

export const Writeup: React.FC<ProjectProps> = ({ project }) => {
	return (
		<div className="mt-8">
			{project.writeup.split("\n").map((line) => {
				if (line.trim().startsWith("##")) {
					return (
						<h4 className="mb-4 text-2xl tracking-normal capitalize">
							{line.replace("##", "").trim()}
						</h4>
					);
				} else if (line.trim().startsWith("#")) {
					return (
						<h3 className="mb-4 text-3xl font-bold text-black">{line.replace("#", "").trim()}</h3>
					);
				} else if (line.trim().startsWith("-")) {
					return <li className="text-lg text-black">{line.replace("-", "").trim()}</li>;
				}
				return <p className="mb-4 text-lg text-black">{line}</p>;
			})}
		</div>
	);
};
