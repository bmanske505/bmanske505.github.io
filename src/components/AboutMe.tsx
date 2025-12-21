import React from "react";
import { FileText } from "lucide-react";
import { FaItchIo, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail, IoMdMailOpen } from "react-icons/io";

const AboutMe: React.FC = () => {
	return (
		<div className="space-y-16 py-16 fade-in">
			{/* Profile Section */}
			<section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
				<div className="relative group mx-auto">
					<img
						src="./brady-headshot.JPG"
						alt="Brady Manske Portrait"
						className="relative rounded-3xl size-72 lg:size-96 object-cover border-4 border-black transition-all duration-700"
					/>
					<div className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl bg-black/75 backdrop-blur border-4 border-black">
						<p className="text-[10px] font-bold primary uppercase tracking-[0.2em]">Based In</p>
						<p className="text-lg text-white font-bold">Seattle, WA</p>
					</div>
				</div>

				<div className="space-y-8 lg:col-span-2">
					<div className="space-y-2">
						<h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
							Brady Manske
						</h1>
						<h2 className="text-sm font-bold primary uppercase tracking-[0.2em]">
							Software Engineer | Gameplay Programming
						</h2>
					</div>

					<p className="text-slate-600 leading-relaxed text-xl font-light">
						A senior Computer Science student at the University of Washington, I am strongly
						interested in software engineering, user experience, and creative technology.
						<br />
						<br />
						Through my work in video game development, I’ve built systems involving real-time
						physics, scripting, UI logic, and animation, often collaborating with others to bring
						complex ideas to life in intuitive ways. I also have hands-on experience working with
						Unity, Blender, GitHub, and other fundamental software for video game development.
						<br />
						<br />
						I’m eager to apply my technical & creative skills in broader SWE roles that value
						thoughtful design, interactivity, and user-centered thinking. I’m especially excited by
						teams that balance technical rigor with creativity. I am always happy to chat or
						collaborate – please don’t hesitate to reach out!
					</p>

					<div className="flex flex-wrap items-center gap-6">
						<a
							href="mailto:bmanske505@gmail.com"
							target="_blank"
							className="flex items-center gap-2 p-1 box-interactable">
							<IoMdMail size={22} />
							Get in Touch
						</a>

						<div className="flex gap-4">
							<a
								href="https://www.linkedin.com/in/brady-manske/"
								target="_blank"
								className="text-interactable p-3 secondary">
								<FaLinkedin size={22} />
							</a>
							<a
								href="https://github.com/State0fFlux"
								target="_blank"
								className="text-interactable p-3 secondary">
								<FaGithub size={22} />
							</a>
							<a
								href="https://state0fflux.itch.io"
								target="_blank"
								className="text-interactable p-3 secondary">
								<FaItchIo size={22} />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Resume Section */}
			<section>
				<h3 className="text-3xl font-bold text-slate-900">My Resume</h3>
				<div className="flex flex-wrap justify-between gap-4 border-black">
					<div>
						<p className="text-slate-500 mt-2">A summary of my professional journey and skills.</p>
					</div>
					<a
						href="./BradyManske.pdf"
						target="_blank"
						className="flex items-center gap-2 p-1 box-interactable">
						<FileText size={22} />
						Download PDF
					</a>
				</div>
				<hr className="h-1 bg-black rounded-full my-10" />
				<div className="w-1/2 mx-auto border-4 border-black rounded-3xl aspect-[8.5/11] overflow-hidden">
					<iframe src="./BradyManske.pdf#view=FitH" className="h-full w-full" title="My Resume" />
				</div>
			</section>
		</div>
	);
};

export default AboutMe;
