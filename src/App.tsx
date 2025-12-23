import React, { useState } from "react";
import { ActiveTab } from "./types";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectGallery from "./components/ProjectGallery";
import { Socials } from "./components/FormattedBlocks";

const App: React.FC = () => {
	const [activeTab, setActiveTab] = useState<ActiveTab>("home");

	return (
		<div>
			<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

			<main className="mx-auto px-8 lg:px-16">
				{activeTab === "home" ? <AboutMe /> : <ProjectGallery />}
			</main>

			<footer className="bg-black/75 backdrop-blur border-y-4 border-black py-6">
				<div className="flex flex-col items-center gap-4">
					<p className="text-white uppercase">© 2025 Brady Manske</p>
					<Socials className="gap-16 text-white" />
				</div>
			</footer>
		</div>
	);
};

export default App;
