import { LuTrophy } from "react-icons/lu";
import { Project } from "../types";
import { FaGithub, FaItchIo, FaLinkedin } from "react-icons/fa6";

interface ProjectProps {
	project: Project;
}

interface DivProps {
	className?: string;
}

export const Heading: React.FC<ProjectProps> = ({ project }) => {
	return (
		<div className="space-y-1">
			<div className="text-[10px] font-bold uppercase tracking-[0.2em]">{project.category}</div>
			<h3 className="text-2xl font-bold text-white">{project.title}</h3>
			{project.award && (
				<span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">
					<LuTrophy size={18} />
					{project.award}
				</span>
			)}
		</div>
	);
};

export const Socials: React.FC<DivProps> = ({ className }) => {
	return (
		<div className={`flex items-center ${className ?? ""}`}>
			<a
				href="https://www.linkedin.com/in/brady-manske/"
				target="_blank"
				className="text-interactable">
				<FaLinkedin size={25} />
			</a>
			<a href="https://github.com/State0fFlux" target="_blank" className="text-interactable">
				<FaGithub size={25} />
			</a>
			<a href="https://state0fflux.itch.io" target="_blank" className="text-interactable">
				<FaItchIo size={25} />
			</a>
		</div>
	);
};

export const Writeup: React.FC<ProjectProps> = ({ project }) => {
	return (
		<div className="my-8">
			{project.writeup.split("\n").map((line, i) => {
				if (line.trim().startsWith("##")) {
					return <h3 key={i}>{line.replace("##", "").trim()}</h3>;
				} else if (line.trim().startsWith("#")) {
					return <h2 key={i}>{line.replace("#", "").trim()}</h2>;
				} else if (line.trim().startsWith("-")) {
					return (
						<li key={i} className="ml-8 mb-2 list-disc">
							{line.replace("-", "").trim()}
						</li>
					);
				}
				return (
					<p key={i} className="leading-relaxed">
						{line}
					</p>
				);
			})}
		</div>
	);
};
