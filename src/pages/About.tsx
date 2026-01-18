import React from "react";
import { Socials } from "../components/FormattedBlocks";
import { PiEnvelopeFill, PiFileTextFill, PiUserDuotone } from "react-icons/pi";

const About: React.FC = () => {
	return (
		<div className="flex flex-col gap-y-16 py-16 fade-in">
			{/* Profile Section */}
			<section className="grid grid-cols-1 lg:grid-cols-5 gap-y-16 gap-x-32 items-center justify-center">
				<div className="relative mx-auto lg:col-span-2">
					<img
						src="./brady-headshot.jpeg"
						alt="Brady Manske Portrait"
						className="size-96 aspect-square object-cover border border-secondary transition-size duration-700"
					/>
					<div className="absolute -bottom-6 -right-6 p-6 border milky">
						<h4>Based In</h4>
						<p className="text-lg primary font-bold">Seattle, WA</p>
					</div>
				</div>

				<div className="space-y-8 lg:col-span-3">
					<div className="space-y-2">
						<h1>Brady Manske</h1>
						<h4>Software Engineer | Gameplay Programming</h4>
					</div>

					<p>
						A versatile programmer with experience across web and game development, I have a passion
						for turning design abstractions into functional, user-focused systems. I thrive at the
						intersection of creativity and technology, collaborating closely with designers and
						artists to bridge the gap between creative vision and technical implementation.
						Comfortable working across front-end and back-end development, I focus on building
						experiences that feel intentional, responsive, and polished, iterating rapidly based on
						playtesting and feedback.
					</p>

					<div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
						<a href="mailto:bmanske505@gmail.com" target="_blank" className="box-depress text-icon">
							<PiEnvelopeFill size={25} title="Email" />
							<span>Get in Touch</span>
						</a>
						<Socials className="text gap-8" />
					</div>
				</div>
			</section>

			{/* Resume Section */}
			<section className="flex flex-col gap-4">
				<h2>My Resume</h2>
				<p>A summary of my professional journey and skills.</p>
				<div className="flex justify-center md:justify-start">
					<a href="./BradyManske.pdf" target="_blank" className="box-depress text-icon">
						<PiFileTextFill size={25} title="Resume" />
						<span>View Resume</span>
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
						<PiUserDuotone size={60} title="Cassidy's LinkedIn Profile" />
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

export default About;
