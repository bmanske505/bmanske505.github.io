import React from "react";
import { FileText } from "lucide-react";
import { IoMdMail } from "react-icons/io";
import { Socials } from "./FormattedBlocks";

const AboutMe: React.FC = () => {
	return (
		<div className="flex flex-col gap-y-16 py-16 fade-in">
			{/* Profile Section */}
			<section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
				<div className="relative mx-auto">
					<img
						src="./brady-headshot.JPG"
						alt="Brady Manske Portrait"
						className="size-72 lg:size-96 object-cover border transition-size duration-700"
					/>
					<div className="absolute -bottom-6 -right-6 p-6 border bg-black/75 backdrop-blur">
						<h4>Based In</h4>
						<p className="text-lg text-white font-bold">Seattle, WA</p>
					</div>
				</div>

				<div className="space-y-8 lg:col-span-2">
					<div className="space-y-2">
						<h1>Brady Manske</h1>
						<h4 className="text-sm">Software Engineer | Gameplay Programming</h4>
					</div>

					<p>
						A versatile programmer with experience across web and game development, I am focused on
						building systems that feel intentional, responsive, and user-centered. I'm comfortable
						wearing multiple hats, moving between gameplay, tools, and interface work, and I enjoy
						collaborating closely with designers and artists to bridge technical structure with
						creative goals. I value rapid learning and iteration, using playtesting and feedback to
						refine experiences until they feel right.
					</p>

					<div className="flex flex-wrap items-center gap-x-20">
						<a
							href="mailto:bmanske505@gmail.com"
							target="_blank"
							className="flex items-center gap-2 p-2 w-fit box-interactable">
							<IoMdMail size={22} />
							Get in Touch
						</a>
						<Socials className="secondary gap-12" />
					</div>
				</div>
			</section>

			{/* Resume Section */}
			<section className="flex flex-col gap-4">
				<h2>My Resume</h2>
				<p>A summary of my professional journey and skills.</p>
				<a
					href="./BradyManske.pdf"
					target="_blank"
					className="flex items-center gap-2 p-2 w-fit box-interactable">
					<FileText size={22} />
					View PDF
				</a>
			</section>
		</div>
	);
};

export default AboutMe;
