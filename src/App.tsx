import React, { useState } from "react";
import { ActiveTab } from "./types";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectGallery from "./components/ProjectGallery";
import { FaItchIo, FaLinkedin, FaGithub } from "react-icons/fa";

const App: React.FC = () => {
	const [activeTab, setActiveTab] = useState<ActiveTab>("home");

	return (
		<div className="min-h-screen flex flex-col bg-body selection:bg-primaryFaded selection:text-primary">
			<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

			<main className="flex-1 max-w-6xl mx-auto px-6 w-full">
				{activeTab === "home" ? <AboutMe /> : <ProjectGallery />}
			</main>

			<footer className="bottom-0 z-50 bg-black/25 backdrop-blur border-y-4 border-black py-6">
				<div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
					<h2 className="text-xl uppercase">Brady Manske</h2>
					<div className="flex gap-20">
						<a className="text-interactable" href="https://www.linkedin.com/in/brady-manske/">
							<FaLinkedin size={22} />
						</a>
						<a className="text-interactable" href="https://github.com/State0fFlux">
							<FaGithub size={22} />
						</a>
						<a className="text-interactable" href="https://bradymanske.itch.io">
							<FaItchIo size={22} />
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
