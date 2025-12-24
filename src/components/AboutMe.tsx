import React from "react";
import { FaEnvelope, FaFilePdf, FaUserLarge } from "react-icons/fa6";
import { Socials } from "./FormattedBlocks";

const AboutMe: React.FC = () => {
	return (
		<div className="flex flex-col gap-y-16 py-16 fade-in">
			{/* Profile Section */}
			<section className="grid grid-cols-1 lg:grid-cols-5 gap-y-16 gap-x-32 items-center justify-center">
				<div className="relative mx-auto lg:col-span-2">
					<img
						src="./brady-headshot.JPG"
						alt="Brady Manske Portrait"
						className="size-96 aspect-square object-cover border transition-size duration-700"
					/>
					<div className="absolute -bottom-6 -right-6 p-6 border bg-black/75 backdrop-blur">
						<h4>Based In</h4>
						<p className="text-lg text-white font-bold">Seattle, WA</p>
					</div>
				</div>

				<div className="space-y-8 lg:col-span-3">
					<div className="space-y-2">
						<h1>Brady Manske</h1>
						<h4>Software Engineer | Gameplay Programming</h4>
					</div>

					<p>
						A versatile programmer with experience across web and game development, I am focused on
						building systems that feel intentional, responsive, and user-centered. I’m comfortable
						wearing multiple hats, moving between gameplay, tools, and interface work, and I enjoy
						collaborating closely with designers and artists to bridge technical structure with
						creative goals. I value rapid learning and iteration, using playtesting and feedback to
						refine experiences until they feel right.
					</p>

					<div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
						<a
							href="mailto:bmanske505@gmail.com"
							target="_blank"
							className="box-interactable text-icon">
							<FaEnvelope size={22} title="Email" />
							Get in Touch
						</a>
						<Socials className="secondary gap-8" />
					</div>
				</div>
			</section>

			{/* Resume Section */}
			<section className="flex flex-col gap-4">
				<h2>My Resume</h2>
				<p>A summary of my professional journey and skills.</p>
				<div className="flex justify-center md:justify-start">
					<a href="./BradyManske.pdf" target="_blank" className="box-interactable text-icon">
						<FaFilePdf size={22} title="Resume" />
						View Resume
					</a>
				</div>
			</section>
			<section className="flex flex-col gap-4">
				<h2>Endorsements</h2>
				<p>
					“Brady is quick to find solutions and improve the accessibility of the UW Recreation
					website. He takes direction extremely well and consistently goes a step further on his own
					to make meaningful improvements. Additionally, he is one of the most responsive student
					employees I have had the privilege of working with.”
				</p>
				<div className="ml-16 text-icon !gap-8">
					<a
						href="https://www.linkedin.com/in/cassidy-sanders-curry/"
						target="_blank"
						className="text-interactable">
						<FaUserLarge size={40} title="Cassidy's LinkedIn Profile" />
					</a>
					<div>
						<p className="font-bold">Cassidy Sanders-Curry</p>
						<p className="text-sm">
							Assistant Director of Outreach, UW Recreation <br />
							(Supervisor)
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutMe;
