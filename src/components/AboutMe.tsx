import React from "react";
import { FileText } from "lucide-react";
import { FaItchIo, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail, IoMdMailOpen } from "react-icons/io";

const AboutMe: React.FC = () => {
	return (
		<div className="space-y-24 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
			{/* Profile Section */}
			<section className="grid grid-cols-2 gap-16 items-center">
				<div className="relative group mx-auto">
					<img
						src="./brady-headshot.JPG"
						alt="Brady Manske Portrait"
						className="relative rounded-3xl w-72 h-72 lg:w-96 lg:h-96 object-cover transition-all duration-700 border-4 border-black"
					/>
					<div className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl bg-black/75 backdrop-blur border-4 border-black">
						<p className="text-[10px] font-bold primary uppercase tracking-[0.2em]">Based In</p>
						<p className="text-lg text-white font-bold">Seattle, WA</p>
					</div>
				</div>

				<div className="space-y-8">
					<div className="space-y-2">
						<h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
							Brady Manske
						</h1>
						<h2 className="text-sm font-black primary uppercase tracking-[0.2em]">
							Software Engineer | Gameplay Programming
						</h2>
					</div>

					<p className="text-slate-600 leading-relaxed text-xl font-light">Add a bio here!</p>

					<div className="flex flex-wrap items-center gap-6">
						<a
							href="mailto:bmanske505@gmail.com"
							className="flex items-center gap-2 px-8 py-4 box-interactable">
							<IoMdMail size={18} />
							Get in Touch
						</a>

						<div className="flex gap-4">
							<a
								href="https://www.linkedin.com/in/brady-manske/"
								className="text-interactable p-3 secondary">
								<FaLinkedin size={22} />
							</a>
							<a href="https://github.com/State0fFlux" className="text-interactable p-3 secondary">
								<FaGithub size={22} />
							</a>
							<a href="https://bradymanske.itch.io" className="text-interactable p-3 secondary">
								<FaItchIo size={22} />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Resume Section */}
			<section className="space-y-10">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-8">
					<div>
						<h3 className="text-3xl font-black text-slate-900">My Resume</h3>
						<p className="text-slate-500 mt-2">A summary of my professional journey and skills.</p>
					</div>
					<a
						href="./BradyManske.pdf"
						className="flex items-center gap-2 px-5 py-1 box-interactable">
						<FileText size={16} />
						Download PDF
					</a>
				</div>

				<div className="backdrop-blur bg-black/50 border-4 border-black rounded-3xl overflow-hidden shadow-inner h-[800px] relative group">
					<iframe src="./BradyManske.pdf" className="w-full h-full p-0" title="Resume PDF" />
				</div>
			</section>
		</div>
	);
};

export default AboutMe;
