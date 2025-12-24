import React from "react";
import { ActiveTab } from "../types";

interface NavbarProps {
	activeTab: ActiveTab;
	setActiveTab: (tab: ActiveTab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
	return (
		<nav className="sticky top-0 z-10 bg-black/75 backdrop-blur border-y-4 border-black py-6 items-center flex justify-center gap-20">
			<button
				onClick={() => setActiveTab("home")}
				className={`text-interactable text-white uppercase ${
					activeTab === "home" ? "active" : ""
				}`}>
				About
			</button>

			<button
				onClick={() => setActiveTab("projects")}
				className={`text-interactable text-white uppercase ${
					activeTab === "projects" ? "active" : ""
				}`}>
				Projects
			</button>
		</nav>
	);
};

export default Navbar;
