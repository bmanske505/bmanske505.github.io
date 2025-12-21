import React, { useState } from "react";
import { ActiveTab } from "./types";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectGallery from "./components/ProjectGallery";
import { FaItchIo, FaLinkedin, FaGithub } from "react-icons/fa";

const App: React.FC = () => {
	const [activeTab, setActiveTab] = useState<ActiveTab>("home");

	return (
		<div>
			<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

			<main className="mx-auto px-8 lg:px-16">
				{activeTab === "home" ? <AboutMe /> : <ProjectGallery />}
			</main>

			<footer className="bg-black/25 backdrop-blur border-y-4 border-black py-6">
				<div className="flex flex-col items-center gap-4">
					<h2 className="text-xl uppercase">Brady Manske</h2>
					<div className="flex gap-8">
						<a
							className="text-interactable"
							href="https://www.linkedin.com/in/brady-manske/"
							target="_blank">
							<FaLinkedin size={22} />
						</a>
						<a className="text-interactable" href="https://github.com/State0fFlux" target="_blank">
							<FaGithub size={22} />
						</a>
						<a className="text-interactable" href="https://state0fflux.itch.io" target="_blank">
							<FaItchIo size={22} />
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
